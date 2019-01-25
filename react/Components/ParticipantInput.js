import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import {Person} from './Person';


export class ParticipantInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  handleChange (event){
    this.setState({ value: event.target.value });
  }

  render(){
    return(
      <form onSubmit={this.handleSubmit}>
        <div className="container-fluid">
          <div className="row justify-content-md-center">
            <div className="col col-lg-4">
              <input type="text" className="form-control" onChange={this.handleChange} value={this.state.value}
               placeholder="Enter the number of participants"/>
            </div>
            <div className="col col-lg-2">
            <Router>
              <div>
                <Link to="/people/">
                  <input type="submit" className="btn btn-light" value="Submit"/>
                </Link>

                <Route path="/people/" exact component={Person}/>
              </div>
            </Router>
            </div>
          </div>
        </div>
      </form>
      )
  }
}