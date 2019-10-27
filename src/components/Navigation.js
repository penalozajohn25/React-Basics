/* utilizando funcion */

import React from 'react';

function Navigation(props) {
    return (
        <nav className="navbar navbar-dark bg-dark">
            <a className="nav-link text-white" href="#">{props.value[0]}
               <span className="badge badge-pill badge-light ml-2">
                {props.value[1].length}
               </span>
            </a>
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
            <a className="nav-link text-white" href="#">{this.props.value[0]}
            <span className="badge badge-pill badge-light ml-2">
                {this.props.value[1].length}
               </span>
            </a>
          </nav>
      )
  }
}
export default Navigation;
*/
