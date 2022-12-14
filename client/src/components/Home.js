import React from "react";
import PageNavbar from "./PageNavbar";
import "../style/Home.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Background from "./Background";
import TextSection from "./TextSection";
import styled from "styled-components";


export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {  
    };
  }

  render() {
    return (
      <Wrapper>
        <Background />
        <PageNavbar active="home" />
        <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '80vh',
      }}>
        <TextSection />
        </div>
      </Wrapper>
    );
  }
}

const Wrapper = styled.div`
  position: relative;
  background: #1f1144;
`;

