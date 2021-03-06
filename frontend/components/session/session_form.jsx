import React from "react";
import { withRouter } from "react-router-dom";

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      email: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.demoLogin = this.demoLogin.bind(this);
  }

  demoLogin(e) {
    this.props
      .demoLogin(this.props.demoUser)
      .then(this.props.clearErrors)
      .then(this.props.closeModal)
      .then(() => this.props.history.push("/"));
  }

  handleSubmit(e) {
    e.preventDefault();
    // const user = Object.assign({}, this.state);
    this.props
      .processForm(this.state)
      .then(this.props.clearErrors)
      .then(this.props.closeModal)
      .then(() => this.props.history.push("/"));
  }

  update(field) {
    return (e) => this.setState({ [field]: e.target.value });
  }

  render() {
    const { formType, errors, otherForm, closeModal } = this.props;
    const errList = errors.map((err, idx) => <li key={idx}>{err}</li>);
    const msg =
      formType === "Go Green." ? "Already have an account?" : "No account?";
    const btn_text = formType === "Go Green." ? "Sign up" : "Log in";
    const intro =
      formType === "Go Green."
        ? "Create an account to join our green community, publish sustainability journals, and follow authors and categories you love."
        : "Sign in to get up-to-date sustainability journals, follow authors and categories you love, and interact with journals.";

    const emailInput =
      formType === "Go Green." ? (
        <div className="ses-info">
          <label>Email</label>
          <input
            className="modal-input"
            type="email"
            value={this.state.email}
            onChange={this.update("email")}
            placeholder="Enter email"
          />
        </div>
      ) : null;

    return (
      <div className="modal-child">
        <div onClick={closeModal} className="close-x">
          &times;
        </div>
        <div className="modal-content">
          <div className="modal-title">{formType}</div>
          <div className="modal-intro">{intro}</div>
          <div className="modal-info2">Think Globally, act green!</div>
          <ul className="session-err">{errList}</ul>
          <form className="modal-form" onSubmit={this.handleSubmit}>
            <div className="ses-info">
              <label htmlFor="username">Username</label>
              <input
                className="modal-input"
                type="text"
                value={this.state.username}
                onChange={this.update("username")}
                placeholder="Enter username"
              />
            </div>

            {emailInput}

            <div className="ses-info">
              <label htmlFor="password">Password</label>
              <input
                className="modal-input"
                type="password"
                value={this.state.password}
                onChange={this.update("password")}
                placeholder="Enter password"
              />
            </div>

            <input className="modal-submit" type="submit" value={btn_text} />
          </form>
          <button
            className="modal-submit demo"
            onClick={() => this.demoLogin()}
          >
            Demo User
          </button>

          <div className="modal-btm">
            {msg}
            <div className="modal-switch">{otherForm}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(SessionForm);
