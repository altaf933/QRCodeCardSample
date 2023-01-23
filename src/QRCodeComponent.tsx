import * as React from "react";
import Card from "react-bootstrap/Card";
import QRCode from 'react-qr-code';
export default class QRCodeComponent extends React.Component<{}> {
   render() {
  return (<div>
              <Card style={{width: "21rem", height: '30rem'}}>
                  <Card style={{width: "18rem", height: '17rem', justifyContent: 'center', alignItems: 'center'  , backgroundColor: '#3685FE', marginTop: 20, alignSelf: 'center'}}>
                      <QRCode
                          bgColor={'transparent'}
                          fgColor={'#ffffff'}
                          size={256}
                          style={{height: "auto", maxWidth: "60%", width: "60%"}}
                          value={'https://www.frontendmentor.io/'}
                          viewBox={`0 0 256 256`}
                      />
                  </Card>
                  <Card.Body>
                      <Card.Title className="Title" style={{margin: 10}}>Improve your front-end skills by building projects</Card.Title>
                      <Card.Subtitle className="SubTitle" style={{paddingTop: 10, margin: 10}}>Scan the QR code to visit Frontend Mentor and take your coding skills to the next level</Card.Subtitle>
        </Card.Body>
      </Card>
  </div>
  );
   }
}
