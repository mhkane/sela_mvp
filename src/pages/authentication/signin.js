import React from "react";
import Wrapper from "../../components/authentication/wrapper";

import Logo from "../../assets/icons/logo.svg";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { signin } from "../../store/action-creators/auth";
import AsycnButton from "../../components/authentication/async-button";
import auth from "../../store/actions/auth";
import MessageToShow from "../../components/errors/messageToShow";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formData: {
        username: "",
        password: "",
        rememberMe: false
      }
    };
  }

  onSubmit = e => {
    e.preventDefault();
    this.props.signin(this.state.formData);
  };

  onChange = e => {
    this.setState({
      formData: {
        ...this.state.formData,
        [e.target.name]: e.target.value
      }
    });
  };

  onCheck = e => {
    this.setState(p => {
      return {
        formData: {
          ...p.formData,
          rememberMe: !p.formData.rememberMe
        }
      };
    });
  };

  componentWillReceiveProps(nextProps) {
    if (this.props !== nextProps) {
      this.setState({
        type: nextProps.type,
        message: nextProps.message,
        inprogress: nextProps.inprogress
      });
    }
  }

  render() {
    const { inprogress, message, type } = this.state;
    return (
      <Wrapper viewName="signin">
        <div className="container">
          <div className="xs-12">
            <img src={Logo} alt="logo" id="logo" />
          </div>
          <div className="xs-12">
            <h2> Sign in to Sela </h2>
          </div>

          <div className="xs-12">
            <form
              className="xs-10 xs-off-1 sm-6 sm-off-3 md-4 md-off-4"
              onSubmit={this.onSubmit}
            >
              <div className="form-group xs-12">
                <input
                  name="username"
                  type="text"
                  className="form-control"
                  placeholder="Username"
                  onChange={this.onChange}
                  value={this.state.formData.username}
                  required
                />
              </div>

              <div className="form-group xs-12">
                <input
                  name="password"
                  type="password"
                  className="form-control"
                  placeholder="Password"
                  value={this.state.formData.password}
                  onChange={this.onChange}
                  required
                />

                <div className="extremes xs-12">
                  <div className="xs-6">
                    <input
                      type="checkbox"
                      name="rememberMe"
                      value={this.state.formData.rememberMe}
                      onChange={this.onCheck}
                    />
                    <label> Keep me signed in</label>
                  </div>

                  <div className="xs-6">
                    <Link to="/forgot/password" className="link">
                      Forgot password?
                    </Link>
                  </div>
                </div>
              </div>

              <div className="form-group xs-12">
                <AsycnButton id="submit-btn" attempt={inprogress}>
                  Sign in
                </AsycnButton>
              </div>

              <div className="form-group xs-12">
                <div className="error">
                  <MessageToShow
                    type={type}
                    message={message}
                    match={auth.SIGNIN_FAILED}
                  />
                </div>

                <Link to="/signup" className="link" style={{ fontSize: "1em" }}>
                  Don’t have an account? Sign up.
                </Link>
              </div>
            </form>
          </div>
        </div>
      </Wrapper>
    );
  }
}

const mapStateToProps = state => {
  const { type, message } = state.auth.action;

  return {
    type,
    inprogress: type === auth.SIGNIN_IN_PROGRESS,
    message
  };
};
const mapDispatchToProps = dispatch => {
  return {
    signin: bindActionCreators(signin, dispatch)
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);