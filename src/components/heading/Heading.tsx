import { useContext } from "react";

import TimeContext from "../../context/TimeContext";

import style from "./Heading.module.css";

const Heading = () => {
  const { state } = useContext(TimeContext);

  return (
    <h1 className={style.heading}>
      {state === "idle" && "Good day to code"}
      {state === "break" && "Break"}
      {state === "work" && "Work"}
    </h1>
  );
};

export default Heading;
