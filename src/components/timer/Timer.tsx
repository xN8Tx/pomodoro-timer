import { useContext, useEffect, useState } from "react";

import TimeContext from "../../context/TimeContext";
import useTimerState from "../../hooks/useTimerState";

import audioUrl from "../../assets/notification.mp3";

import style from "./Timer.module.css";

const Timer = () => {
  const { breakMin, breakSec, workMin, workSec, state } =
    useContext(TimeContext);
  const timerState = useTimerState();

  const [minutes, setMinutes] = useState<number>(workMin);
  const [seconds, setSeconds] = useState<number>(workSec);

  useEffect(() => {
    let interval: number;
    const audio = new Audio(audioUrl);

    if (state !== "idle") {
      interval = setInterval(() => {
        if (seconds === 0) {
          if (minutes === 0) {
            audio.play();
            timerState();
            clearInterval(interval);
          } else {
            setMinutes((prevMinutes) => prevMinutes - 1);
            setSeconds(59);
          }
        } else {
          setSeconds((prevSeconds) => prevSeconds - 1);
        }
      }, 1000);
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [minutes, seconds, state]);

  useEffect(() => {
    const modeMin = state === "break" ? breakMin : workMin;
    const modeSec = state === "break" ? breakSec : workSec;

    setMinutes(modeMin);
    setSeconds(modeSec);
  }, [state]);

  return (
    <h3 className={style.timer}>
      {minutes < 10 ? `0${minutes}` : minutes}:
      {seconds < 10 ? `0${seconds}` : seconds}
    </h3>
  );
};

export default Timer;
