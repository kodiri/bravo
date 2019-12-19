import React from "react";
import firebase from "../fireStore/FireStore";
import { Link } from "react-router-dom";

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
          <div>
            <Link to={`/show/${qr.key}`}>{qr.title}
              <div id="displayQRCode">
                <img alt="qrcode" src={qr.generatedQRUrl}></img>
              </div>
            </Link>
          </div>
        ))}
      </>
    );
  }
}
export default Dashboard;