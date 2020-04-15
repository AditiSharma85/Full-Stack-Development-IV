import React from 'react';
class Likes extends React.Component {
           state = {
            likes: 0
        };
    
        addLike = () => {
            let likeCount = this.state.likes + 1;
            this.setState({
                likes:likeCount
            });
        };
    
        render() {
            return<span> <button onClick = {this.addLike}>Like</button> Likes: {this.state.likes}</span>
        }
    }
export default Likes;