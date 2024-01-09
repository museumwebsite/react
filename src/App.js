import React, { Component } from "react";
import Navbar from "./1.components/navbar";

class App extends Component {
    render() {
        const myStyle = {
            backgroundImage:
                "url('https://q-xx.bstatic.com/xdata/images/hotel/840x460/365532197.jpg?k=60786fdb154311fc24c8863e8a8ebc06057a5e04f3792f2e5907799f3adac9c0&o=')",
            height: "100vh",
            marginTop: "1vh",
            fontSize: "30px",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            

        };
        return (
            <div style={myStyle}>
                <h1><i> GALLERISTA </i></h1>
                <Navbar />
             
            </div>
            
        );
    }
}
 
export default App;