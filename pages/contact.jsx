import React from "react";
import Contact from "../components/Contact";
import Hero from "../components/Hero";
//import Link from "next/link";

const contact = () => {
  return (
    <div>
      <Hero
        heading="Contact"
        message="Submit the form below if you have any questions, or if you want to build, or modify your website with us."

      />
      <Contact />
    </div>
  );
};

export default contact;
