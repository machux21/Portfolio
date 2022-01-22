import React, { useState } from "react";
import styled from "styled-components";
const Form = styled.form`
  width: 60vw;
  height: 70vh;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  .name-email {
    label {
      text-align: right;
    }
    input {
      width: 100%;
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
          <input id="name" type="text" />
        </div>
        <div className="name-email">
          <label htmlFor="email">Email</label>
          <input id="email" type="email" />
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
