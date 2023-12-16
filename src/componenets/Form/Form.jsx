import React, { useState, useEffect } from "react";
import { useTelegram } from "../../hooks/useTelegram";
import "./Form.css";

const Form = () => {
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const [subject, setSubject] = useState("phisical");
  const { tg } = useTelegram();

  const onChangeCountry = (e) => setCountry(e.target.value);
  const onChangeCity = (e) => setCity(e.target.value);
  const onChangeSubject = (e) => setSubject(e.target.value);

  useEffect(() => {
    tg.MainButton.setParams({
      text: "Button text",
    });
  }, []);

  useEffect(() => {
    if (!city || !country) {
      tg.MainButton.hide();
    } else {
      tg.MainButton.show();
    }
  }, [country, city]);

  return (
    <div className={"form"}>
      <h3>Enter some own data</h3>
      <input
        className={"input"}
        type="text"
        placeholder={"Country"}
        onChange={onChangeCountry}
        value={country}
      />
      <input
        className={"input"}
        type="text"
        placeholder={"City"}
        onChange={onChangeCity}
        value={city}
      />
      <select className={"select"} value={subject} onChange={onChangeSubject}>
        <option value={"phidsical"}>Physical person</option>
        <option value={"phidsical"}>FOP</option>
      </select>
    </div>
  );
};

export default Form;
