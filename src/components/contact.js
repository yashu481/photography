import React from "react";
import Header from '../components/header/header';
import Footer from '../components/footer/footer';
import ContactForm from "./contactpage";

const Contact = () => {
    return (
        <div>
            <Header></Header>
            <ContactForm></ContactForm>
            <Footer></Footer>
        </div>
    );
};

export default Contact;