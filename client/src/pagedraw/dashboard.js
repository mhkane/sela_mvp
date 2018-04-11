// Generated by https://pagedraw.io/pages/8218
import SmsList from '../components/sms' 
import Disputeslist from './disputeslist';
import Convlist from './convlist';
import Paymentlist from './paymentlist';
import Taskupdateslist from './taskupdateslist';
import React from 'react';
import './dashboard.css';

function render() {
    return <div className="dashboard">
        { ((this.props.deviceSize < 768 ? 'mobile' : 'default') === "mobile") ?
            <div className="dashboard-mobile-7">
                <div className="dashboard-0-0-0">
                    <div className="dashboard-disputeslist_instance-7">
                        <Disputeslist state={(this.props.disputes ? 'default' : 'empty')} list={this.props.disputes} /> 
                    </div>
                </div>
                <div className="dashboard-0-0-1">
                    <div className="dashboard-convlist_instance-9">
                        <Convlist list={this.props.conversations} state={(this.props.conversations ? 'default' : 'empty')} /> 
                    </div>
                </div>
                <div className="dashboard-0-0-2">
                    <div className="dashboard-paymentlist_instance-3">
                        <Paymentlist list={this.props.payments} state={(this.props.payments ? 'default' : 'empty')} /> 
                    </div>
                </div>
                <div className="dashboard-0-0-3">
                    <div className="dashboard-taskupdateslist_instance-7">
                        <Taskupdateslist state={(this.props.taskUpdates ? 'default' : 'empty')} list={[]} /> 
                    </div>
                </div>
                <div className="dashboard-0-0-4" /> 
            </div>
        : null}
        { ((this.props.deviceSize < 768 ? 'mobile' : 'default') === "default") ?
            <div className="dashboard-default-8">
                <div className="dashboard-1-0-0">
                    <div className="dashboard-rectangle_2" style={{"background": ('#fafafa')}}>
                        <div className="dashboard-1-0-0-0-0">
                            <div className="dashboard-disputeslist_instance-8">
                                <Disputeslist state={(this.props.disputes ? 'default' : 'empty')} list={this.props.disputes} /> 
                            </div>
                            <div className="dashboard-convlist_instance-6">
                                <Convlist list={this.props.conversations} state={(this.props.conversations ? 'default' : 'empty')} /> 
                            </div>
                        </div>
                        <div className="dashboard-1-0-0-0-1">
                            <div className="dashboard-paymentlist_instance-6">
                                <Paymentlist list={this.props.payments} state={(this.props.payments ? 'default' : 'empty')} /> 
                            </div>
                            <div className="dashboard-taskupdateslist_instance-9">
                                <Taskupdateslist state={(this.props.taskUpdates ? 'default' : 'empty')} list={[]} /> 
                            </div>
                        </div>
                        <div className="dashboard-1-0-0-0-2" /> 
                    </div>
                </div>
            </div>
        : null}
    </div>;
};

export default function(props) {
    return render.apply({props: props});
}