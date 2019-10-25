/* utilizando funcion */
import React from 'react';

function Navigation(props) {
    return (
        <nav className="navbar navbar-dark bg-dark">
            <a className="nav-link text-white" href="#">{props.title}</a>
        </nav>
    );
}
export default Navigation;

/* utilizando clase */
/*
import React, {Component} from 'react';

class Navigation extends Component{
  render() {
      return (
          <nav className="navbar navbar-dark bg-dark">
            <a className="nav-link text-white" href="#">{this.props.title}</a>
          </nav>
      )
  }
}
export default Navigation;
*/
