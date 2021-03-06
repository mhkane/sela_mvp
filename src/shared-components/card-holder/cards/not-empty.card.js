import React from "react";
import { NotEmptyCardStyling2 } from "./card.style";
import { Line } from "rc-progress";
import { withRouter } from "react-router";
import { connect } from "react-redux";
import help from "../../../assets/icons/help.svg";
import ReactTooltip from "react-tooltip";

const NotEmptyCard = ({ p, history, showMap }) => {
  const hasImage = p["project-avatar"];

  return (
    <NotEmptyCardStyling2
      className={showMap === true ? "xs-12 sm-6 md-4 lg-4" : "xs-12 sm-6 md-4 lg-3"}
    >
      <div className="container xs-12" onClick={() => history.push(`/projects/${p._id}/description`)}>

        <div className="box xs-12 md-11 sm-11">

        <div className='wrap-img'>
          <div className="xs-12 dw">
            <p>{p.percentage_raised}% Funded</p>
          </div>
            
        {
            Boolean(hasImage) ? (
            <img
              src={p["project-avatar"]}
              alt={""}
            />
          ) : (
            <div
              className="no-image"
            >
            </div>
          )}
        </div>
        
          <div className="inner xs-12">

          <div className='xs-12 white'>

              <div className='xs-12'>
                <span className='location'>{p.location.name}</span>
                <h4>{p.name}</h4>
              </div>

              {p._id !== "5ca8a10d35b915002208c730" &&
                <div className="tasks xs-12">
                
                  <div className="tasks xs-12">
                    <Line
                      percent={
                        p.percentage_raised
                      }
                      strokeWidth="4"
                      trailWidth="4"
                      strokeColor="#F2994A"
                      trailColor="rgba(242, 153, 74, 0.15)"
                    />
                  </div>
                
                  <div className='xs-6 sp'>
                    <h3>{p.goal }</h3>
                    <label className='funding-label'>Funding goal</label>
                  </div>
                
                  <div className='xs-6 sp'>
                    <h3>{ p.raised }</h3>
                    <label className='funding-label'>Funding raised</label>
                  </div>
                  
                </div>
              }
              
            </div>
        
            <button className={`has-radius ${p.status.toLowerCase()}`}>
              {p.status.toLowerCase()} 
              <span>
                <img src={help} className={p.status.toLowerCase()} alt="" data-tip data-for={p.status.toLowerCase()} />
              </span>
            </button>

            <ReactTooltip place="bottom" type="info" effect="solid" id='completed'>
              <span>This project has been fully funded and executed to completion</span>
            </ReactTooltip>

            <ReactTooltip place="bottom" type="info" effect="solid" id='in-progress'>
              <span>Execution of this project is currently still in progress.</span>
            </ReactTooltip>
            
            <ReactTooltip place="bottom" type="info" effect="solid" id='proposed'>
              <span>This project has not been started and is actively seeking financial investments.</span>
            </ReactTooltip>
      
          </div>
        </div>
      </div>
    </NotEmptyCardStyling2>
  );
};

const mapStateToProps = state => {
  return {
    showMap: state.home.map.show
  };
};
export default withRouter(connect(mapStateToProps)(NotEmptyCard));
