import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../App.css";
import firebase from "../Firebase";

class Home extends Component {
  constructor(props) {
    super(props);
    this.ref = firebase.firestore().collection("users");
    this.unsubscribe = null;
    this.state = {
      users: []
    };
  }

  onCollectionUpdate = querySnapshot => {
    const users = [];
    querySnapshot.forEach(doc => {
      const {
        title,
        firstName,
        lastName,
        email,
        companyOrg,
        jobTitle,
        address,
        telTypeCell,
        telTypeWork,
        note,
        url
      } = doc.data();
      users.push({
        key: doc.id,
        doc, // DocumentSnapshot
        title,
        firstName,
        lastName,
        email,
        companyOrg,
        jobTitle,
        address,
        telTypeCell,
        telTypeWork,
        note,
        url
      });
    });
    this.setState({
      users
    });
  };

  componentDidMount() {
    this.unsubscribe = this.ref.onSnapshot(this.onCollectionUpdate);
  }

  render() {
    return (
      <div class="container">
        <div class="default">
          <div class="heading">
            <h3 class="title">QR Code Wallet</h3>
          </div>
          <div class="body">
            <h4>
              <Link to="/create">Generate New QR Code</Link>
            </h4>
            <table class="table">
              <thead>
                <tr>
                  <th>Title</th>
                  <th>firstName</th>
                  <th>lastName</th>
                  <th>email</th>
                  <th>companyOrg</th>
                  <th>jobTitle</th>
                  <th>address</th>
                  <th>telTypeCell</th>
                  <th>telTypeWork</th>
                  <th>note</th>
                  <th>url</th>
                </tr>
              </thead>
              <tbody>
                {this.state.users.map(user => (
                  <tr>
                    <td>
                      <Link to={`/show/${user.key}`}>{user.title}</Link>
                    </td>
                    <td>{user.firstName}</td>
                    <td>{user.lastName}</td>
                    <td>{user.email}</td>
                    <td>{user.companyOrg}</td>
                    <td>{user.jobTitle}</td>
                    <td>{user.address}</td>
                    <td>{user.telTypeCell}</td>
                    <td>{user.telTypeWork}</td>
                    <td>{user.note}</td>
                    <td>{user.url}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
