import React, { useState } from "react";
import styled from "styled-components";
const Form = styled.form`
  width: 60vw;
  margin: 0 auto;
  padding: 0;
  display: flex;
  flex-direction: column;

  label {
    display: block;
    font-weight: 700;
    font-size: 20px;
    min-height: 40px;
    cursor: pointer;
  }

  .name-email {
    z-index: 90;
    input {
      height: 40px;
      line-height: 40px;
      font-size: 20px;
      margin-bottom: 20px;
      padding: 0 40px 0 10px;
      border-radius: 5px;
      border: 3px solid transparent;
      transition: 0.3s ease all;
    }
  }
  .message {
    z-index: 90;
    margin-bottom: 20px;
    textarea {
      width: 80%;
      height: 30vh;
      border-radius: 5px;
      border: 3px solid transparent;
      font-size: 20px;
      padding: 10px;
    }
  }
  button {
    margin: 0 auto;
    height: 40px;
    line-height: 45px;
    width: 300px;
    border-radius: 5px;
    border: none;
    font-size: 20px;
    background-color: lightblue;
  }
`;
export default function () {
  const [data, setData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(data);
    setData({
      name: "",
      email: "",
      message: ""
    });
    e.target.reset();
  };
  return (
    <div>
      <h3>Contact Me</h3>
      <Form onSubmit={handleSubmit}>
        <div className="name-email">
          <label htmlFor="name">Name</label>
          <input
            id="name"
            name="name"
            type="text"
            placeholder="Name..."
            onChange={handleChange}
          />
        </div>
        <div className="name-email">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            name="email"
            placeholder="user@example.com"
            onChange={handleChange}
          />
        </div>
        <div className="message">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            placeholder="Write a message..."
            onChange={handleChange}
          />
        </div>
        <button type="submit">Send</button>
      </Form>
    </div>
  );
}
