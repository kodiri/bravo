import React from 'react';
//import * as firebase from 'firebase';


class DatabasePage extends React.Component {
    constructor() {
      super();
      this.state = {
          speed: 10
      };
    }

    componentDidMount() {
        this.setState({
            speed: 26
        })
    }
  
    render() {
      return (
        <div>
          <h2>It is {this.state.speed}.</h2>
        </div>
      );
    }
  }
  
  export default DatabasePage;