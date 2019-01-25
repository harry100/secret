import React from 'react';


export class Person extends React.Component {
  constructor(props) {
    super(props);
  }
  render(){
    return(
      <input type="text" className="form-control"
        placeholder="Participant 1"/>
      )
  }
}