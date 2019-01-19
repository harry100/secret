import React from 'react';
import { ClockFunction } from './Clock';


export class Banner extends React.Component {
  constructor(props){
    super(props);
    this.state ={
      date: "",
      msg: ""
    }
  }

  componentDidMount() {
    const monthNames = ["January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"
    ];
    let today = new Date();
    let d = today.getDate();
    let m = today.getMonth();
    let y = today.getFullYear().toString();
    if(d<10){d='0'+d}

    let aaja = d.toString() + ' ' + monthNames[m] + ' ' + y.toString() + '  |'
    this.setState({ date: aaja })
    if(m>=0 && m<10){
      this.setState({ msg: "Isn't it to early to be planning a secret santa?? No judgements tho"})
    }
  }

  getDate(){
    let t = new Date();
    this.setState({ date: t })
  }

  render(){
    
    return(
      <div className="container-fluid">
        <div className="row">
          <div className="col-8">
            <span className="heading"> Secret Santa </span>
            <p> {this.state.msg} </p>
          </div>
          <div className="col-4">
          </div>
        </div>
        <div className="row">
          <div className="col-10">
          </div>
          <div className="col-2 clock">
            {this.state.date} <ClockFunction />
          </div>
        </div>
      </div>
      )
  }
}