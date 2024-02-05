import { useContext, useEffect, useState } from "react";

import TimeContext from "../../context/TimeContext";

import style from "./Form.module.css";

const Form = () => {
  const {
    breakMin,
    setBreakMin,
    breakSec,
    setBreakSec,
    workMin,
    setWorkMin,
    workSec,
    setWorkSec,
    isSetting,
  } = useContext(TimeContext);

  const [inputMinutes, setInputMinutes] = useState<string>("");
  const [inputSeconds, setInputSeconds] = useState<string>("");

  const minutesChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (Number(event.target.value) > 0 || Number(event.target.value) < 61) {
      setInputMinutes(event.target.value);

      if (isSetting) {
        setWorkMin(Number(event.target.value));
      } else {
        setBreakMin(Number(event.target.value));
      }
    }
  };
  const secondsChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (Number(event.target.value) > 0 || Number(event.target.value) < 61) {
      setInputSeconds(event.target.value);

      if (isSetting) {
        setWorkSec(Number(event.target.value));
      } else {
        setBreakSec(Number(event.target.value));
      }
    }
  };

  useEffect(() => {
    const modeMin = !isSetting ? breakMin : workMin;
    const modeSec = !isSetting ? breakSec : workSec;

    const editModeMin = modeMin < 10 ? `0${modeMin}` : modeMin.toString();
    const editModeSec = modeSec < 10 ? `0${modeSec}` : modeSec.toString();

    setInputMinutes(editModeMin);
    setInputSeconds(editModeSec);
  }, [isSetting]);

  return (
    <div className={style.form}>
      <input
        type="text"
        placeholder="00"
        value={inputMinutes}
        onChange={minutesChangeHandler}
      />
      :
      <input
        type="text"
        placeholder="00"
        value={inputSeconds}
        onChange={secondsChangeHandler}
      />
    </div>
  );
};

export default Form;
