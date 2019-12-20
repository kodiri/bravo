import React, { Component } from "react";
import firebase from "../fireStore/FireStore";
import { Link } from "react-router-dom";
import "./Show.css";

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
      <div>
        <div>
          <h4>
            <Link to="/dashboard">Back to Dashboard</Link>
          </h4>
          <div className="card">
            <img
              alt="qrcode"
              className="qrImage"
              src={this.state.qr.generatedQRUrl}
            ></img>
            <div className="container">
              <h2>
                <b>{this.state.qr.title}</b>
              </h2>
              <table>
                <tr>
                  <th>First Name:</th>
                  <td>{this.state.qr.firstName}</td>
                </tr>
                <tr>
                  <th>Last Name</th>
                  <td>{this.state.qr.lastName}</td>
                </tr>
                <tr>
                  <th>Email:</th>
                  <td>{this.state.qr.email}</td>
                </tr>
                <tr>
                  <th>Company/Org:</th>
                  <td>{this.state.qr.companyOrg}</td>
                </tr>
                <tr>
                  <th>Job Title:</th>
                  <td>{this.state.qr.jobTitle}</td>
                </tr>
                <tr>
                  <th>Address</th>
                  <td>{this.state.qr.address}</td>
                </tr>
                <tr>
                  <th>Mob:</th>
                  <td>{this.state.qr.telTypeCell}</td>
                </tr>
                <tr>
                  <th>Tel:</th>
                  <td>{this.state.qr.telTypeWork}</td>
                </tr>
                <tr>
                  <th>Social 1:</th>
                  <td>{this.state.qr.note}</td>
                </tr>
                <tr>
                  <th>Social 2:</th>
                  <td>{this.state.qr.url}</td>
                </tr>
              </table>
            </div>
            <button
              onClick={this.delete.bind(this, this.state.key)}
              className="button"
            >
              Delete QR
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Show;
