import React from "react";
import "./contactmap.css";
import map from "../../assets/images/map2.svg";
import { NavLink } from "react-router-dom";

const ContactMap = () => {
  return (
    <>
      <div className="title my-3">
        <div className="container">
          <ul className="d-flex gap-2">
            <li>
              <NavLink to="/index" end>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact-us" end>
                Contacts
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
      <div className="map mb-3">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7026271.097868096!2d24.551028529882704!3d59.250046066780975!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x465f9d86c5590a35%3A0xac5dd727a529fe56!2sEC%20Utbildning%20AB!5e0!3m2!1sar!2siq!4v1667027025482!5m2!1sar!2siq"
          width="100%"
          height="350"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </>
  );
};

export default ContactMap;
