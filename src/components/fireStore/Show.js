import React, { Component } from 'react';
import firebase from '../Firebase';
import { Link } from 'react-router-dom';

class Show extends Component {

  constructor(props) {
    super(props);
    this.state = {
      user: {},
      key: ''
    };
  }

  componentDidMount() {
    const ref = firebase.firestore().collection('users').doc(this.props.match.params.id);
    ref.get().then((doc) => {
      if (doc.exists) {
        this.setState({
          user: doc.data(),
          key: doc.id,
          isLoading: false
        });
      } else {
        console.log("No such document!");
      }
    });
  }

  delete(id){
    firebase.firestore().collection('users').doc(id).delete().then(() => {
      console.log("Document successfully deleted!");
      this.props.history.push("/")
    }).catch((error) => {
      console.error("Error removing document: ", error);
    });
  }

  render() {
    return (
      <div class="container">
        <div class="default">
          <div class="heading">
          <h4><Link to="/" class="primary">Back to Wallet</Link></h4>
            <h3 class="title">
              {this.state.user.title}
            </h3>
          </div>
          <div class="body">
            <dl>
              <dt>First Name:</dt>
              <dd>{this.state.user.firstName}</dd>
              <dt>Last Name:</dt>
              <dd>{this.state.user.lastName}</dd>
              <dt>Email:</dt>
              <dd>{this.state.user.email}</dd>
              <dt>Company/Org:</dt>
              <dd>{this.state.user.companyOrg}</dd>
              <dt>Job Title:</dt>
              <dd>{this.state.user.jobTitle}</dd>
              <dt>Address:</dt>
              <dd>{this.state.user.address}</dd>
              <dt>Mob:</dt>
              <dd>{this.state.user.telTypeCell}</dd>
              <dt>Tel:</dt>
              <dd>{this.state.user.telTypeWork}</dd>
              <dt>Social 1:</dt>
              <dd>{this.state.user.note}</dd>
              <dt>Social 2:</dt>
              <dd>{this.state.user.url}</dd>
            </dl>
            <Link to={`/edit/${this.state.key}`} class="success">Edit</Link>&nbsp;
            <button onClick={this.delete.bind(this, this.state.key)} class="danger">Delete</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Show;
