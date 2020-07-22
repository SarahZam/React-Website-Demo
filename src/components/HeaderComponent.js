import React, {Component} from 'react';
import { Navbar, NavbarBrand, Jumbotron} from "reactstrap";

class HeaderComponent extends Component {

    render() {
        return (
          <React.Fragment>
              <Navbar dark>
                  <div className="container">
                      <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
                  </div>
              </Navbar>
              <Jumbotron>
                  <div className="container">
                      <div className="row row-header">
                          <div className="col-12 col-sm-6">
                              <h1>Ristorante Con Fusion</h1>
                              <p>bingbongbingbongbingbongbingbongbingbongbingbongbingbong</p>
                          </div>
                      </div>
                  </div>
              </Jumbotron>
          </React.Fragment>
        );
    }
}

export default HeaderComponent;