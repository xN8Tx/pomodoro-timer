import { useContext } from "react";

import TimeContext from "../../context/TimeContext";

import style from "./Setting.module.css";

export default function Setting() {
  const { state, setState, isSetting, setIsSetting } = useContext(TimeContext);

  const settingText = isSetting ? "Set break timer" : "Set work timer";

  const settingHandler = () => {
    setIsSetting(!isSetting);
  };

  const stateHandler = () => {
    if (state === "idle") return setState("work");
    if (state === "work") return setState("break");
    return setState("idle");
  };

  return (
    <div className={style.settingsWrapper}>
      <button className={style.primaryButton} onClick={stateHandler}>
        {state === "idle" && "Start"}
        {state === "work" && "Break"}
        {state === "break" && "Stop"}
      </button>
      {state === "idle" && (
        <button className={style.secondaryButton} onClick={settingHandler}>
          {settingText}
        </button>
      )}
    </div>
  );
}
