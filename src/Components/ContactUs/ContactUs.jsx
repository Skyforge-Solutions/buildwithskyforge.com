import React from "react";

// Styles
import "./Contactus.css";

const ContactUs = () => {
  return (
    <div className="contactus__container mt-10" id="contactus">
      <div className="container mx-auto w-full flex items-center flex-col md:flex-row justify-center p-5 md:p-16">
        {/* Contact us Left section */}
        <div className="contactus__left my-16 flex-[0.5]">
          <img
            src="/hands.png"
            alt={"Rekhta & SkyForge"}
            width={600}
            height={600}
          />
          <p className="text-gray-500 mt-5 p-3">
            We are committed to processing the information in order to contact
            you and talk about your project.
          </p>
        </div>

        {/* Contact us Right section */}
        <div className="contactus__left w-full my-16 md:flex-[0.5] flex flex-col items-start justify-start md:pl-16">
          <h2 className="text-4xl font-semibold text-center w-full mb-10">
            Contact Us
          </h2>
          <input type="text" placeholder="Name" className="w-full p-4 border border-gray-300 rounded-md" />
          <input type="email" placeholder="Email" className="w-full mt-5 p-4 border border-gray-300 rounded-md" />
          <input type="text" placeholder="Website" className="w-full mt-5 p-4 border border-gray-300 rounded-md" />
          <textarea placeholder="Message" className="w-full mt-5 p-4 border border-gray-300 rounded-md" />
        
        <div className="flex w-full justify-between items-center">
          <button className="bg-[#03A07A] text-white px-4 py-2 w-1/2 mr-2 rounded mt-5">Submit</button>
          <button className="bg-[#03A07A] text-white flex items-center justify-center py-2 w-1/2 rounded mt-5">Download Brochure</button>
        </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
