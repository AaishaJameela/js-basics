import React from 'react';
import Header from'./components/Header';
import Footer from'./components/Footer';
import Sidebar from'./components/Sidebar';
import pic from "./assets/welcome.jpg";

const App = () => {
  return (
    <div>
    <Header />
    <Sidebar />
    <div>Hi, welcome to this page!</div>
    <div><img src={pic} /></div>
    <Footer />
    </div>
    );
}
export default App;
