// Generated by https://pagedraw.io/pages/8218
import Taskupdateitem from './taskupdateitem';
import React from 'react';
import './taskupdateslist.css';

function render() {
    return <div className="taskupdateslist">
        { (this.props.state === "default") ?
            <div className="taskupdateslist-default-3">
                <div className="taskupdateslist-0-0-0">
                    <div className="taskupdateslist-rectangle_2">
                        <div className="taskupdateslist-0-0-0-0-0">
                            <div className="taskupdateslist-title-5">
                                <div className="taskupdateslist-0-0-0-0-0-0-0">
                                    <div className="taskupdateslist-text-3">TASKS</div>
                                </div>
                            </div>
                        </div>
                        <div className="taskupdateslist-0-0-0-0-1">
                            <div className="taskupdateslist-0-0-0-0-1-0">
                                { this.props.list.map((item, i) => {
                                    return <div key={i} className="taskupdateslist-itemcontainer-7">
                                        <div className="taskupdateslist-0-0-0-0-1-0-0-0-0">
                                            <div className="taskupdateslist-taskupdateitem_instance-6">
                                                <Taskupdateitem updateType={item.updateType} title={item.description} subtitle={item.projectName} status={item.status} isLast={(this.props.list && this.props.list.length - 1  === i ? 1 : 0)} /> 
                                            </div>
                                        </div>
                                    </div>;
                                }) }
                            </div>
                        </div>
                        <div className="taskupdateslist-0-0-0-0-2" /> 
                    </div>
                </div>
            </div>
        : null}
        { (this.props.state === "empty") ?
            <div className="taskupdateslist-empty-9">
                <div className="taskupdateslist-1-0-0">
                    <div className="taskupdateslist-rectangle_21">
                        <div className="taskupdateslist-1-0-0-0-0">
                            <div className="taskupdateslist-title-54">
                                <div className="taskupdateslist-1-0-0-0-0-0-0">
                                    <div className="taskupdateslist-text-39">TASKS</div>
                                </div>
                            </div>
                        </div>
                        <div className="taskupdateslist-1-0-0-0-1">
                            <div className="taskupdateslist-text_1">
                                {"No recent tasks updates."}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="taskupdateslist-1-0-1" /> 
            </div>
        : null}
    </div>;
};

export default function(props) {
    return render.apply({props: props});
}