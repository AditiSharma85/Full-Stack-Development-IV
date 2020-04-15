import React from 'react';
import Moment from 'react-moment';
class Timer extends React.Component {
    render() { 
        return(
           <Moment format="HH:mm:ss">{this.props.dateToFormat}</Moment>
                 
         );
    }
}
export default Timer;
