/* usando funcion */

import React, {useState} from 'react';
function FormTask(props) {

    function handleInput(e){
        console.log(e.target.value, e.target.name);
        const {value, name} = e.target;
        setCount({
          ...count,
          [name] : value
        });
      }
      const [count, setCount] = useState({
        title: '',
        responsible: '',
        description: '',
        priority: 'low'
    });
      function handleSubmit(e){
         e.preventDefault();
         props.onAddTools(count);
      }
    return (
        <form className="card" onSubmit={handleSubmit}>
          <div className="card-body">
            <div className="form-group">
              <input 
                type="text"
                name="title"
                onChange={handleInput}
                className="form-control"
                placeholder="Title"
              />
            </div>
            <div className="form-group">
              <input 
                type="text"
                name="responsible"
                onChange={handleInput}
                className="form-control"
                placeholder="Responsible"
              />
            </div>
            <div className="form-group">
              <input 
                type="text"
                name="description"
                onChange={handleInput}
                className="form-control"
                placeholder="Description"
              />
            </div>
            <div className="form-group">
            <select
                name="priority"
                onChange={handleInput}
                className="form-control"
            >
                <option>low</option>
                <option>medium</option>
                <option>hight</option>
            </select>
            </div>
          </div>
          <button className="btn btn-primary" color="primary">Save</button>
        </form>
    );
}
export default FormTask;

/* usando clase */
/*
import React, {Component} from 'react';

class FormTask extends Component {
  constructor() {
    super();
      this.state = {
        title: '',
        responsible: '',
        description: '',
        priority: 'low'
      }
      this.handleInput  = this.handleInput.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
   }
    handleInput(e){
    const {value, name} = e.target;
     this.setState({
      [name] : value
    });
  }
  handleSubmit(e){
    e.preventDefault();
    this.props.onAddTools(this.state);
  }
  render(){
    return(
      <form className="card" onSubmit={this.handleSubmit}>
          <div className="card-body">
            <div className="form-group">
              <input 
                type="text"
                name="title"
                onChange={this.handleInput}
                className="form-control"
                placeholder="Title"
              />
            </div>
            <div className="form-group">
              <input 
                type="text"
                name="responsible"
                onChange={this.handleInput}
                className="form-control"
                placeholder="Responsible"
              />
            </div>
            <div className="form-group">
              <input 
                type="text"
                name="description"
                onChange={this.handleInput}
                className="form-control"
                placeholder="Description"
              />
            </div>
            <div className="form-group">
            <select
                name="priority"
                onChange={this.handleInput}
                className="form-control"
            >
                <option>low</option>
                <option>medium</option>
                <option>hight</option>
            </select>
            </div>
          </div>
          <button className="btn btn-primary" color="primary">Save</button>
        </form>
    )
  }
}
export default FormTask;
*/