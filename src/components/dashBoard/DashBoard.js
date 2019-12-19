import React from "react";
import './DashBoard.css';
import QRPicture from './qrcodepic.png';
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
      {this.state.qrs.length > 0 ?
        this.state.qrs.map(qr => (
          <div className='qrMainContainer'>
            <div className='qrContainer'>
                <div>
                  <Link to={`/show/${qr.key}`}>
                    <h3>{qr.title}</h3>
                  </Link>
                </div>
                <div>
                  <Link to={`/show/${qr.key}`}>
                    <img alt="qrcode" src={qr.generatedQRUrl}></img>
                  </Link>
                </div>
            </div>
          </div>
        )) :
        <div className='qrMainContainer'>
          <div>
            <h2>Go to Profile Page to generate a new QR Code</h2>
          </div>
          <div>
            <img id='qrIcon'src={QRPicture} alt='qrcode icon'/>
          </div>
        </div>
      }
      </>
    );
  }
}
export default Dashboard;


