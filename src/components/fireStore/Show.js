import React, { Component } from "react";
import firebase from "../fireStore/FireStore";
import { Link } from "react-router-dom";

class Show extends Component {
  constructor(props) {
    super(props);
    this.state = {
      qr: {},
      key: ""
    };
  }

  componentDidMount() {
    const ref = firebase
      .firestore()
      .collection("qrs")
      .doc(this.props.match.params.id);
    ref.get().then(doc => {
      if (doc.exists) {
        this.setState({
          qr: doc.data(),
          key: doc.id,
          isLoading: false
        });
      } else {
        console.log("No such document!");
      }
    });
  }

  delete(id) {
    firebase
      .firestore()
      .collection("qrs")
      .doc(id)
      .delete()
      .then(() => {
        console.log("Document successfully deleted!");
        this.props.history.push("/dashboard");
      })
      .catch(error => {
        console.error("Error removing document: ", error);
      });
  }

  render() {
    return (
      <div class="container">
        <div>
          <div>
            <h4>
              <Link to="/dashboard">Back to Dashboard</Link>
            </h4>
            <h2>{this.state.qr.title}</h2>
          </div>
          <div>
            <div>First Name:{this.state.qr.firstName}</div>
            <div>Last Name:{this.state.qr.lastName}</div>
            <div>Email:{this.state.qr.email}</div>
            <div>Company/Org:{this.state.qr.companyOrg}</div>
            <div>Job Title:{this.state.qr.jobTitle}</div>
            <div>Address:{this.state.qr.address}</div>
            <div>Mob:{this.state.qr.telTypeCell}</div>
            <div>Tel:{this.state.qr.telTypeWork}</div>
            <div>Social 1:{this.state.qr.note}</div>
            <div>Social 2:{this.state.qr.url}</div>
            <div>
              <img alt="qrcode" src={this.state.qr.generatedQRUrl}></img>
            </div>
          </div>
          <button
            onClick={this.delete.bind(this, this.state.key)}
          >
            Delete This Qr Code
          </button>
        </div>
      </div>
    );
  }
}

export default Show;
