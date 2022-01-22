import React, { useState } from "react";
import styled from "styled-components";
const Form = styled.form`
  width: 60vw;
  height: 70vh;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  label {
    display: blocK;
    text-align: left;
    font-weight: 700;
    font-size: 20px;
    min-height: 40px;
    cursor: pointer;
  }
  .name-email {
    position: relative;
    z-index: 90;
    input {
      width: 100%;
      height: 40px;
      line-height: 40px;
      font-size: 20px;
      padding: 0 40px 0 10px;
      border-radius: 5px;
      border: 3px solid transparent;
      transition: 0.3s ease all;
    }
  }
`;
export default function () {
  return (
    <div>
      <h3>Contact Me</h3>
      <Form>
        <div className="name-email">
          <label htmlFor="name">Name</label>
          <input id="name" name="name" type="text" placeholder="Name..." />
        </div>
        <div className="name-email">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            name="email"
            placeholder="user@example.com"
          />
        </div>
        <div>
          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" placeholder="Hola" />
        </div>
        <input type="submit" value="submit" />
      </Form>
    </div>
  );
}
