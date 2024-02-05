import { useContext } from "react";

import TimeContext from "../../context/TimeContext";

import Heading from "../heading/Heading";
import Setting from "../setting/Setting";
import Timer from "../timer/Timer";
import Form from "../form/Form";

import style from "./Wrapper.module.css";

const Wrapper = () => {
  const { state } = useContext(TimeContext);

  return (
    <div className={style.wrapper}>
      <Heading />
      {state === "idle" && <Form />}
      {state !== "idle" && <Timer />}
      <Setting />
    </div>
  );
};

export default Wrapper;
