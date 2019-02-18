import React from "react";
// import { Link } from "react-router-dom";
import { NotEmptyCardStyling2 } from "./card.style";
// import Progressbar from "../../unique/progressbar";

import { Line } from "rc-progress";
import { withRouter } from "react-router";

import { connect } from "react-redux";

const NotEmptyCard = ({ p, history, showMap }) => {
  const hasImage = p["project-avatar"];

  return (
    <NotEmptyCardStyling2
      className={showMap === true ? "xs-12 sm-6 " : "xs-12 sm-6 md-4"}
    >
      <div className="container xs-12">
        <div className="box xs-12 md-11 sm-11">
          {Boolean(hasImage) ? (
            <img
              src={p["project-avatar"]}
              alt={""}
              onClick={() => history.push(`/projects/${p._id}/description`)}
            />
          ) : (
            <div
              className="no-image"
              onClick={() => history.push(`/projects/${p._id}/description`)}
            >
              <div className="c-w i-h">
                <div className="c i-h">
                  <h1>{p.name}</h1>
                </div>
              </div>
            </div>
          )}
          <div className="inner">
            <div className="text">
              <h3     onClick={() => history.push(`/projects/${p._id}/description`)}>{p.name}</h3>
              <p> {p.owner.organization.name} </p>
            </div>

            <div className="tasks xs-12">
              <Line
                percent={(p.raised / p.goal) * 100}
                strokeWidth="4"
                trailWidth="4"
                strokeColor="#156EDC"
                trailColor="#F2F2F2"
              />
              <div className="xs-12 dw">
                <p className="xs-9">{((p.raised / p.goal) * 100).toFixed(2)}% Funded</p>
              </div>
            </div>
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
