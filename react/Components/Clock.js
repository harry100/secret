import React from 'react';


export class ClockFunction extends React.Component {

    constructor() {
        super();
        this.state = { 
          time: new Date()
        };
    }

    componentDidMount() { // create the interval once component is mounted
        this.update = setInterval(() => {
            this.setState({ time: new Date() });
        }, 1 * 1000); // every 1 seconds
    }

    componentWillUnmount() { // delete the interval just before component is removed
        clearInterval(this.update);
    }

    render() {
      let { time } = this.state; // retrieve the time from state
      let hours = time.getHours().toString();
      let minutes = time.getMinutes().toString();
      if (minutes<10){minutes = '0' + minutes}

      return (
        <React.Fragment>
          {/* print the string prettily */}
          {/*time.toLocaleTimeString()*/}
          {hours} : {minutes} 
        </React.Fragment>
      );
    }
}