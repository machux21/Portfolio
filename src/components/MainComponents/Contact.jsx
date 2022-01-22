import React, { useState } from "react";
export default function () {
  return (
    <div>
      <h3>Contact Me</h3>
      <form>
        <input type="text" />
        <input type="email" />
        <textarea name="message" placeholder="Hola" />
        <input type="submit" value="submit" />
      </form>
    </div>
  );
}
