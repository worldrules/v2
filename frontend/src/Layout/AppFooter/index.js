import React, { Fragment } from "react";

class AppFooter extends React.Component {
  render() {
    return (
      <Fragment>
        <div className="app-footer">
          <div className="app-footer__inner">
            <div className="app-footer-left">
              <ul className="nav"></ul>
            </div>
            <div className="app-footer-right">
              <ul className="nav">
                <li className="nav-item">
                  <a href="https://www.zletric.com.br/" className="nav-link">
                    <div className="badge bg-success me-1 ms-0">
                      <small>NEW</small>
                    </div>
                    https://www.zletric.com.br/
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default AppFooter;
