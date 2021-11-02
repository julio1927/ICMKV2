import React, { Component } from "react";
import ReactAux from "../ReactAux/ReactAux";
import { MainContent } from "./LayoutElements";
import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";

//HOC, layout is a wrapper technically making it an HOC
class Layout extends Component {
  render() {
    return (
      <ReactAux>
        <NavBar/>
        <MainContent>{this.props.children}</MainContent>
        <br />
        <Footer />
      </ReactAux>
    );
  }
}

export default Layout;
