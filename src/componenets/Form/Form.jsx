import React, { useState, useEffect, useCallback } from "react";
import { useTelegram } from "../../hooks/useTelegram";
import "./Form.css";

const Form = () => {
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const [subject, setSubject] = useState("first");
  const { tg } = useTelegram();

  const onSendData = useCallback(() => {
    const data = { country, city, subject };

    tg.sendData(JSON.stringify(data));
  }, [country, city, subject]);

  useEffect(() => {
    tg.onEvent("mainButtonClicked", onSendData);

    return () => {
      tg.offEvent("mainButtonClicked", onSendData);
    };
  }, [tg, onSendData]);

  useEffect(() => {
    tg.MainButton.setParams({ text: "Button text" });
  }, [tg]);

  useEffect(() => {
    if (!city || !country) {
      tg.MainButton.hide();
    } else {
      tg.MainButton.show();
    }
  }, [country, city, tg]);

  const onChangeCountry = (e) => {
    setCountry(e.target.value);
  };

  const onChangeCity = (e) => {
    setCity(e.target.value);
  };

  const onChangeSubject = (e) => {
    setSubject(e.target.value);
  };

  return (
    <div className={"form"}>
      <h3>Input data</h3>
      <input
        className={"input"}
        type="text"
        placeholder={"Country"}
        value={country}
        onChange={onChangeCountry}
      />
      <input
        className={"input"}
        type="text"
        placeholder={"City"}
        value={city}
        onChange={onChangeCity}
      />
      <select className={"select"} value={subject} onChange={onChangeSubject}>
        <option value={"first"}>First</option>
        <option value={"second"}>Second</option>
      </select>
    </div>
  );
};

export default Form;
