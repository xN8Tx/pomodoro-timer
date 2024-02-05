import TimeContext from "./TimeContext";

import type { StateType } from "../typings";
import { useEffect, useState } from "react";

type TimeProviderPropsType = {
  children: React.ReactNode;
};

const TimeProvider = ({ children }: TimeProviderPropsType) => {
  const [state, setState] = useState<StateType>("idle");
  const [isSetting, setIsSetting] = useState<boolean>(false);
  const [workMin, setWorkMin] = useState<number>(30);
  const [workSec, setWorkSec] = useState<number>(0);
  const [breakMin, setBreakMin] = useState<number>(10);
  const [breakSec, setBreakSec] = useState<number>(0);

  useEffect(() => {
    if (workMin < 0 || workMin > 60) setWorkMin(60);
    if (workSec < 0 || workSec > 60) setWorkSec(0);

    if (breakMin < 0 || breakMin > 60) setBreakMin(60);
    if (breakSec < 0 || breakSec > 60) setBreakSec(0);
  }, [workMin, workSec, breakMin, breakSec]);

  return (
    <TimeContext.Provider
      value={{
        state,
        setState,
        isSetting,
        setIsSetting,
        workMin,
        workSec,
        breakMin,
        breakSec,
        setWorkMin,
        setWorkSec,
        setBreakMin,
        setBreakSec,
      }}
    >
      {children}
    </TimeContext.Provider>
  );
};

export default TimeProvider;
