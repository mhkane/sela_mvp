import React,{Component,Fragment} from 'react';
import {connect} from 'react-redux';
import WrapStyle from "./main.style";
import moment from 'moment';
import mapping from "../../../../mapping";
import { withRouter, Link } from 'react-router-dom';

class MainViewForPreviewingProject extends Component{
    constructor(props){
        super(props);
        this.state = {
            info: props.info
        }
    }

    componentWillReceiveProps(nextProps){
        if(this.props !== nextProps){
            if(Boolean(nextProps.info)){
                this.setState({
                    info: nextProps.info
                })
            }
        }
    }
    
    render(){

        const { info } = this.state,
        splited_description = info.description.split(".");
        let { hasSubmitted, documents,  proposalId } = info;

        const image = info.image || info['project-avatar'];
        const duration = info.expected_duration ||  `${moment(info.startDate).format("DD MMM YY")} -  ${moment(info.endDate).format("DD MMM YY")}`;

        const implementationBudget = typeof(info.implementationBudget) === "string"? info.implementationBudget : window.moneyFormat(info.implementationBudget, "$");

        const observationBudget = typeof(info.observationBudget) === "string"? info.observationBudget : window.moneyFormat(info.observationBudget, "$");

        const totalBudget = implementationBudget && observationBudget ? 
        window.moneyFormat(info.implementationBudget + info.observationBudget, "$"): implementationBudget;
        
        let sdgs = info.sdgs || info.tags;
        let location = "";
        const title = info.title || info.name;

        
        if(info.location){
            location = typeof(info.location) === "string" ? info.location: info.location.name;
        }

        const project_id = this.props.match.params.id;
        
        const withBreaks = splited_description.map((text,i)=>{
            return <Fragment key={i}>
            {`${text}${ i !== splited_description.length - 1  ? ".": ""}`} 
            {  i % 2 === 0 && <Fragment><br/><br/></Fragment>}
             </Fragment>
        });

        const Boxes = sdgs.map((sdg,i)=>{
            return <div key={i} className={'f-l'}>
                <button className='sdg-btn'>
                    <img src={mapping[sdg]} alt="sdg"/>
                </button>
            </div>
        });

        return <WrapStyle className='xs-12'>
            <div className='xs-12'>
                <img id='header' src={image} alt={info.image} />
            </div>
            <div className='xs-12 contain'>
                <div className='xs-12 md-6 lg-5 pad'>
                    <div className="xs-12 sm-9 text">
                        <h2>{title}</h2> 
                    </div>
                    <div className="xs-12 sm-3">
                        <button id='status'> {info.status === "PROPOSED" ? "IN PROGRESS": info.status} </button>                    
                    </div>
                    <div className='xs-12 bg-text'>
                    <p>{withBreaks}</p>

                    <div className='extra xs-12'>
                        {info.extra ? 
                        Boolean(info.extra.length) ?
                            info.extra.map((v,y)=>{
                            return <Fragment key={y}>
                                <p>{
                                Object.keys(v).map((k)=>{
                                return (
                                    <Fragment>
                                    <label>{k}</label>
                                    { 
                                    Object.keys(v[k]).map((key, i) => {
                                    return <Fragment key={i}> 
                                    <strong>{key}:</strong>
                                    <span>{ v[k][key] }</span>
                                    </Fragment> })
                                    }
                                </Fragment>
                                )
                                })
                            }
                            </p>
                            </Fragment>
                            }): null: null  
                        }
                        </div>

                    </div>

                    <div className='xs-12 add-doc'>
                       {documents && documents.length && 
                        <h5>Additional documents</h5>
                       }
                        <div className='xs-12 sm-10 document'>
                            {
                                documents.map((doc,i)=>{
                                let type = doc.filetype.split("/")[0];
                                if(type !== 'image' && type !== 'video' && type !== 'audio'){
                                    type = 'document';
                                }
                                return <div className='xs-12 inner' key={i}>
                                    <div className={`img preview-${type} xs-3 sm-2`}/>
                                    <div className='text xs-6 sm-7'>
                                    <h4>{doc.name}</h4>
                                        <p>{doc.size}</p>
                                    </div>
                                    <div className='download xs-2 sm-2'>
                                        <a href={doc.doc} target="_blank" rel="noopener noreferrer"> Download</a>
                                    </div>
                                </div>
                                })
                            }
                        </div>

                    </div>
                </div>

                <div className='xs-12 md-3 lg-3 pad' id='initiated'>
                    {this.props.self !== true && 
                    <Fragment>
                        <h3>Initiated By</h3>
                        <div className='xs-12 border-top-bottom'>
                            <div className='xs-4 sm-3 md-2'>
                                <img src={ Boolean(info.initiated_by.avatar) ? info.initiated_by.avatar: "https://placehold.it/50"} alt='avatar'/>
                            </div>
                            <div className='xs-8 sm-9 md-10'>
                                <h5>{info.initiated_by.name}</h5>
                                <span>{info.initiated_by.user_type}</span>
                            </div>
                        </div>
                    </Fragment>
                    }

                    <div className='xs-12 p-text'>
                        <div className='xs-12'>
                        <label className='xs-12'><span id="location"/> Location</label>
                          <p>{location}</p>
                        </div>

                        <div className='xs-12'>
                        <label className='xs-12'><span id="money"/> Total Budget</label>
                         
                            <p>{ totalBudget}</p>
                            
                        </div>
                        <div className='xs-12'>
                            <label className='xs-12'><span id="duration"/> Timeline </label>
                                <p>{duration}</p>
                        </div>
                    </div>
                </div>
                
                <div className='xs-12 md-3 lg-4 impact-metrics'>
                    <label className='xs-12'>Impact Metrics</label>
                    {Boxes}
                </div>

                {this.props.self !== true &&    
                    <div className='xs-12 md-2 pad'>
                    { hasSubmitted ?
                        <Link to={`/dashboard/milestone/${proposalId}`} className='btn-milestone inverse'>View Milestones</Link>
                    : 
                        <Link to={`/dashboard/milestone/new/${project_id}/s`} className='btn-milestone'>Submit Milestones</Link>
                    }
                    </div>
                 }
            </div>
        </WrapStyle>
    }
}

export default withRouter(connect()(MainViewForPreviewingProject));