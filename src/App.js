/* utilizando clase */

/*
import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Navigation from './components/navigation';
import { tools } from './json/data';

console.log(tools);

class App extends Component {
    constructor() {
        super();
        this.state = {
            tools
        }
    }
    render(){
        const todos = this.state.tools.map((tool, i)=>{
            return (
            <div className="col-md-4">
              <div className="card mt-4">
                <div className="card-header">
                  <h3>{tool.title}</h3>
                  <span className="badge badge-pill badge-danger ml-2">
                      {tool.priority}
                  </span>
                </div>
                <div className="card-body">
                  <p>{tool.description}</p>
                  <p><mark>{tool.responsible}</mark></p>
                </div>
              </div>
            </div>
            )
        });
        return(
            <div className="App">
                <Navigation title='Option1'/>
                <header className="App-header">
                    <div className="container">
                        <div className="row mt-4">
                            {todos}
                        </div>
                    </div>
                    <img src={logo} className="App-logo" alt="logo" />
                </header>
            </div>
        )
    }
}

export default App;
*/

/* utilizando funcion */


import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Navigation from './components/navigation';
import { tools } from './json/data';

function App() {
  const [count, setCount] = useState(tools);
  const todos = count.map((count, i)=>{
    return (
        <div className="col-md-4">
          <div className="card mt-4">
            <div className="card-header">
              <h3>{count.title}</h3>
              <span className="badge badge-pill badge-danger ml-2">
                  {count.priority}
              </span>
            </div>
            <div className="card-body">
              <p>{count.description}</p>
              <p><mark>{count.responsible}</mark></p>
            </div>
          </div>
        </div>
    )
  });
    return (
    <div className="App">
      <Navigation title='Option1'/>
      <header className="App-header">
          <div className="container">
              <div className="row mt-4">
                  {todos}
              </div>
          </div>
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}

export default App;
