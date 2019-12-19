import React from "react";
import firebase from "../fireStore/FireStore";
import { Link } from "react-router-dom";
import "./DashBoard.css";
import QRPicture from './qrcodepic.png';

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
        {this.state.qrs.length > 0 ?
          this.state.qrs.map(qr => (
            <Link to={`/show/${qr.key}`}>
              <div className="card">
                <img
                  alt="qrcode"
                  className="qrImage"
                  src={qr.generatedQRUrl}
                ></img>
                <div className="containerTitle">
                  <h2>
                    <b>{qr.title}</b>
                  </h2>
                </div>
              </div>
            </Link>
          )) :
          <div className='qrMainContainer'>
            <div>
              <h2>Go to Profile Page to generate a new QR Code</h2>
            </div>
            <div>
              <img id='qrIcon' src={QRPicture} alt='qr code pic'/>
            </div>
          </div>
        }
      </>
    );
  }
}
export default Dashboard;