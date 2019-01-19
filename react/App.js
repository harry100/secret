import React, { Component } from 'react';
import { Banner } from './Components/Banner'
import {ParticipantInput} from './Components/ParticipantInput'


class App extends Component{
   render(){
      return(
         <div>
            <Banner />
            <ParticipantInput />
         </div>
      );
   }
}
export default App;