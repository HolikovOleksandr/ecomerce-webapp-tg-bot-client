import React from "react";
import "./Form.css";

function Form() {
  return (
    <div className={"form"}>
      <h3>Enter some own data</h3>
      <input className={"input"} type="text" placeholder={"Country"} />
      <input className={"input"} type="text" placeholder={"City"} />
      <input className={"input"} type="text" placeholder={"Street"} />
      <select className={"select"}>
        <option value={"phidsical"}>Physical person</option>
        <option value={"phidsical"}>FOP</option>
      </select>
    </div>
  );
}

export default Form;
