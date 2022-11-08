import React, { useState } from "react";
import "./contactform.css";

const ContactForm = () => {
  const [canSubmit, setCanSubmit] = useState(false);
  const [contactForm, setContactForm] = useState({
    name: "",
    email: "",
    comment: "",
  });
  const [formErrors, setFormErrors] = useState({
    name: "",
    email: "",
    comment: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    validate(contactForm);
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setContactForm({ ...contactForm, [id]: value });
  };

  const validate = (values) => {
    let errors = {};
    let email_regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if (!values.name) {
      errors.name = "You should enter a name";
      document.getElementById("name").classList.add("error");
    } else {
      document.getElementById("name").classList.remove("error");
    }
    if (!values.email) {
      errors.email = "You should enter an email";
      document.getElementById("email").classList.add("error");
    } else if (!email_regex.test(values.email)) {
      errors.email = "Email is not valid";
    } else {
      document.getElementById("email").classList.remove("error");
    }
    if (!values.comment) {
      errors.comment = "You should enter a comment";
      document.getElementById("comment").classList.add("error");
    } else if (values.comment.length < 5) {
      errors.comment = `Comment should be more than 5 characters`;
      document.getElementById("comment").classList.add("error");
    } else {
      document.getElementById("comment").classList.remove("error");
    }

    setFormErrors(errors);

    Object.keys(errors).length == 0 ? setCanSubmit(true) : setCanSubmit(false);
  };

  /*const submitForm = (event) => {
    event.preventDefault();
  };

  const checkLength = (
    element,
    errorMessage = "The field is required.",
    minLength = 1
  ) => {
    if (element.target.value.length < minLength) {
      element.target.classList.add("error");
      document.getElementById(`${element.target.id}ErrorMessage`).innerHTML =
        "you should enter more than 1 character";
    } else {
      document.getElementById(`${element.target.id}ErrorMessage`).innerHTML =
        "";
      element.target.classList.remove("error");
    }
  };

  const checkEmail = (element, errorMessage = "Email is not valid") => {
    if (
      !element.target.value.match(
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
      )
    ) {
      element.target.classList.add("error");
      document.getElementById(`${element.target.id}ErrorMessage`).innerHTML =
        errorMessage;
    } else {
      element.target.classList.remove("error");
    }
  };

  const validate = (element) => {
    switch (element.target.type) {
      case "text":
        checkLength(element);
        break;
      case "email":
        checkLength(element);
        checkEmail(element);
        break;
      case "textarea":
        checkLength(element, "The field should be more than 8 characters", 8);
        break;
    }
  };
  */
  return (
    <div className="contact-form">
      <div className="container">
        {canSubmit ? (
          <div className="form-title">
            <h4 className="text-capitalize mt-5 mb-4">
              Thanks for your comment!
            </h4>
          </div>
        ) : (
          <>
            <div className="form-title">
              <h4 className="text-capitalize mt-5 mb-4">
                come in contact with us
              </h4>
            </div>
            <form noValidate action="#" method="POST" onSubmit={handleSubmit}>
              <div className="row gap-3 gap-sm-0">
                <div className="col-sm-6">
                  <div className="form-group">
                    <input
                      className="form-control"
                      type="text"
                      placeholder="Your Name"
                      id="name"
                      onChange={handleChange}
                    />
                    <span className="error-message" id="nameErrorMessage">
                      {formErrors.name}
                    </span>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="form-group">
                    <input
                      className="form-control"
                      type="email"
                      placeholder="Your Email"
                      id="email"
                      onChange={handleChange}
                    />
                    <span className="error-message" id="emailErrorMessage">
                      {formErrors.email}
                    </span>
                  </div>
                </div>
                <div className="col-sm-12">
                  <div className="form-group">
                    <textarea
                      className="form-control comments"
                      id="comment"
                      onChange={handleChange}
                      cols="30"
                      rows="6"
                      placeholder="Comments"
                    ></textarea>
                    <span className="error-message" id="commentErrorMessage">
                      {formErrors.comment}
                    </span>
                  </div>
                </div>
                <div className="col-sm-12">
                  <button className="btn-post-comment text-capitalize text-white border-0 py-2 px-4 mt-4">
                    post comment
                  </button>
                </div>
              </div>
            </form>
          </>
        )}
      </div>
    </div>
  );
};

export default ContactForm;
