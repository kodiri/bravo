import React from "react";
import firebase from "../fireStore/FireStore";
import { Link } from "react-router-dom";
import "./DashBoard.css";

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.ref = firebase.firestore().collection("qrs");
    this.unsubscribe = null;
    this.state = {
      qrs: []
    };
  }

  onCollectionUpdate = querySnapshot => {
    const qrs = [];
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
        url,
        generatedQRUrl
      } = doc.data();
      qrs.push({
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
        url,
        generatedQRUrl
      });
    });
    this.setState({
      qrs
    });
  };

  componentDidMount() {
    this.unsubscribe = this.ref.onSnapshot(this.onCollectionUpdate);
  }
  render() {
    return (
      <>
        {this.state.qrs.map(qr => (
          <Link to={`/show/${qr.key}`}>
            <div className="card">
              <img
                alt="qrcode"
                className="qrImage"
                src={qr.generatedQRUrl}
              ></img>
              <div className="container">
                <h2>
                  <b>{qr.title}</b>
                </h2>
              </div>
            </div>
          </Link>
        ))}
      </>
    );
  }
}
export default Dashboard;