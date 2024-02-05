import { useContext } from "react";

import TimeContext from "../context/TimeContext";

const useTimerState = () => {
  const { state, setState } = useContext(TimeContext);

  return () => {
    if (state === "idle") return setState("work");
    if (state === "work") return setState("break");
    return setState("work");
  };
};

export default useTimerState;
