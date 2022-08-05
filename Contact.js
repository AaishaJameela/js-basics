import React from 'react';
import Header from'./components/Header';
import Footer from './components/Footer';
import Sidebar from'./components/Sidebar';

const Contact = (props) => {
    return (

        //<div>
        //<Header />
        //<Sidebar />
        //<h1>Contact US Page</h1>
        //<Footer />
        //</div>
        <div>
        <div>{props.data}</div>
        </div>
    );
    }
    export default Contact;