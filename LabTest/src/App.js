import React , {Component} from 'react';
import './App.css';
import TweetContainer from './Components/tweetcontainer';
class App extends Component{
  render(){

    return(
     <div className="App">
      <>
     <TweetContainer status="Observe Social Distancing in COVID-19 Times !!"/>
     <TweetContainer status="At home, binge watching Breaking Bad for second time"/>
     <TweetContainer status="When is beach opening up? Can't Wait.."/>
     </>
     </div>
    )
  }

}
export default App;
