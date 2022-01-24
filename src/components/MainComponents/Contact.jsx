import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";

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
        <div>
          <label htmlFor="name">Name</label>
          <GrupoInput>
            <Input
              id="name"
              name="name"
              type="text"
              placeholder="Name..."
              onChange={handleChange}
            />
            <Icon icon={faCheckCircle} />
          </GrupoInput>
          {false && <p>Holaaa</p>}
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <GrupoInput>
            <Input
              id="email"
              type="email"
              name="email"
              placeholder="user@example.com"
              onChange={handleChange}
            />
            <Icon icon={faCheckCircle} />
          </GrupoInput>
          {false && <p>Chauu</p>}
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

const colors = {
  border: "#0075FF",
  error: "#bb2929",
  success: "#1ed12d"
};
const Form = styled.form`
  box-sizing: border-box;
  width: 60vw;
  height: 600px;
  border: 3px solid white;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  label {
    display: block;
    font-weight: 700;
    font-size: 20px;
    min-height: 40px;
    cursor: pointer;
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
      transition: 0.3s ease all;
      &:focus {
        outline: none;
        border: 3px solid ${colors.border};
        box-shadow: 3px 0px 30px ${colors.border};
      }
    }
  }
  p {
    font-size: 12px;
    color: ${colors.error};
    margin-bottom: 0;
    display: none;
  }
  button {
    margin: 0 auto;
    height: 40px;
    line-height: 45px;
    width: 300px;
    border-radius: 5px;
    border: none;
    font-size: 20px;
    background-color: ${colors.border};
  }
`;
const GrupoInput = styled.div`
  position: relative;
  z-index: 90;
  width: 100%;
  border: 3px solid red;
`;
const Input = styled.input`
  width: 90%;
  height: 40px;
  margin: 0 auto;
  line-height: 40px;
  font-size: 20px;
  padding: 0 40px 0 10px;
  border-radius: 5px;
  border: 3px solid transparent;
  transition: 0.3s ease all;
  &:focus {
    border: 3px solid ${colors.border};
    outline: none;
    box-shadow: 3px 0px 30px ${colors.border};
  }
`;
const Icon = styled(FontAwesomeIcon)`
  position: absolute;
  right: 28px;
  bottom: 15px;
  z-index: 110;
  color: green;
  font-size: 16px;
`;
