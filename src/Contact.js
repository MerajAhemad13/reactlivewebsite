import React, { useState } from "react";

function Contact() {
  const [data, setdata] = useState({
    fullname: "",
    email: "",
    phone: "",
  });

  const InputEvent = (event) => {
    const { name, value } = event.target;

    setdata((preVal) => {
      return {
        ...preVal,
        [name]: value,
      };
    });
  };

  const formSubmit = (e) => {
    e.preventDefault();
    alert(
      `My name is ${data.fullname}. My mobile number is ${data.phone} and email is ${data.email}`
    );
  };
  return (
    <>
      <div className="my-5">
        <h1 className="text-center">Contact Us</h1>
      </div>
      <div className="container contact_div">
        <div className="row">
          <div className="col-md-6 col-10 mx-auto">
            <form onSubmit={formSubmit}>
              <div className="mb-3">
                <label className="form-label">Fullname</label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleInputEmail1"
                  name="fullname"
                  value={data.fullname}
                  onChange={InputEvent}
                  placeholder="Enter your name"
                />
                {/* <div id="emailHelp" className="form-text">
                  We'll never share your email with anyone else.
                </div> */}
              </div>
              <div className="mb-3">
                <label className="form-label">Email address</label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  name="email"
                  value={data.email}
                  onChange={InputEvent}
                  placeholder="Enter your e-mail"
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Phone</label>
                <input
                  type="number"
                  className="form-control"
                  id="exampleInputNumber"
                  name="phone"
                  value={data.phone}
                  onChange={InputEvent}
                  placeholder="Enter your phone number"
                />
              </div>
              <div className="mb-3 form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="exampleCheck1"
                />
                <label className="form-check-label">Check me out</label>
              </div>
              <button type="button" className="btn btn-outline-primary">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
