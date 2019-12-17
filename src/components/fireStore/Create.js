import React, { Component } from 'react';
//import ReactDOM from 'react-dom';
import firebase from '../Firebase';
import { Link } from 'react-router-dom';

class Create extends Component {

  constructor() {
    super();
    this.ref = firebase.firestore().collection('users');
    this.state = {
      title: '',
      firstName: "",
        lastName: "",
        email: "",
        companyOrg: "",
        jobTitle: "",
        address: "",
        telTypeCell: "",
        telTypeWork: "",
        note: "",
        url: ""
    };
  }
  onChange = (e) => {
    const state = this.state
    state[e.target.name] = e.target.value;
    this.setState(state);
  }

  onSubmit = (e) => {
    e.preventDefault();

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
    
    } = this.state;

    this.ref.add({
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
    }).then((docRef) => {
      this.setState({
        title: '',
      firstName: "",
        lastName: "",
        email: "",
        companyOrg: "",
        jobTitle: "",
        address: "",
        telTypeCell: "",
        telTypeWork: "",
        note: "",
        url: ""
      });
      this.props.history.push("/")
    })
    .catch((error) => {
      console.error("Error adding document: ", error);
    });
  }

  render() {
    const { title,
        firstName,
        lastName,
        email,
        companyOrg,
        jobTitle,
        address,
        telTypeCell,
        telTypeWork,
        note,
        url } = this.state;
    return (
      <div class="container">
        <div class="default">
          <div class="heading">
            <h3 class="title">
              Create New QR Code
            </h3>
          </div>
          <div class="body">
            <h4><Link to="/" class="primary">Back to Wallet</Link></h4>
            <form onSubmit={this.onSubmit}>
              <div class="form-group">
                <label for="title">Qr Title:</label>
                <input type="text" class="form-control" name="title" value={title} onChange={this.onChange} placeholder="QR Title" />
              </div>
              <div class="form-group">
                <label for="firstName">First Name:</label>
                {/* <textArea class="form-control" name="firstName" onChange={this.onChange} placeholder="FirstName" cols="80" rows="3">{firstName}</textArea> */}
                <input type="text" class="form-control" name="firstName" value={firstName} onChange={this.onChange} placeholder="First Name" />
              </div>
              <div class="form-group">
                <label for="lastName">Last Name:</label>
                <input type="text" class="form-control" name="lastName" value={lastName} onChange={this.onChange} placeholder="Last Name" />
              </div>
              <div class="form-group">
                <label for="email">Email:</label>
                <input type="text" class="form-control" name="email" value={email} onChange={this.onChange} placeholder="Email" />
              </div>
              <div class="form-group">
                <label for="companyOrg">Company:</label>
                <input type="text" class="form-control" name="companyOrg" value={companyOrg} onChange={this.onChange} placeholder="Company/Organisation" />
              </div>
              <div class="form-group">
                <label for="jobTitle">Job Title:</label>
                <input type="text" class="form-control" name="jobTitle" value={jobTitle} onChange={this.onChange} placeholder="Job Title" />
              </div>
              <div class="form-group">
                <label for="address">Address:</label>
                <input type="text" class="form-control" name="address" value={address} onChange={this.onChange} placeholder="Address" />
              </div>
              <div class="form-group">
                <label for="telTypeCell">Mobile:</label>
                <input type="text" class="form-control" name="telTypeCell" value={telTypeCell} onChange={this.onChange} placeholder="Mobile" />
              </div>
              <div class="form-group">
                <label for="telTypeWork">Tel:</label>
                <input type="text" class="form-control" name="telTypeWork" value={telTypeWork} onChange={this.onChange} placeholder="Tel" />
              </div>
              <div class="form-group">
                <label for="note">Social 1:</label>
                <input type="text" class="form-control" name="note" value={note} onChange={this.onChange} placeholder="e.g. https://www.facebook.com/user" />
              </div>
              <div class="form-group">
                <label for="url">Social 2:</label>
                <input type="text" class="form-control" name="url" value={url} onChange={this.onChange} placeholder="e.g. https://www.twitter.com/user" />
              </div>
             
              <button type="submit" class="success">Generate QR Code</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Create;
