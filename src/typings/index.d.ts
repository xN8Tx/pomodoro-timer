type StateType = "work" | "break" | "idle";

type TimeContextType = {
  state: StateType;
  setState: React.Dispatch<React.SetStateAction<StateType>>;
  isSetting: boolean;
  setIsSetting: React.Dispatch<React.SetStateAction<boolean>>;
  workMin: number;
  workSec: number;
  breakMin: number;
  breakSec: number;
  setWorkMin: React.Dispatch<React.SetStateAction<number>>;
  setWorkSec: React.Dispatch<React.SetStateAction<number>>;
  setBreakMin: React.Dispatch<React.SetStateAction<number>>;
  setBreakSec: React.Dispatch<React.SetStateAction<number>>;
};

export type { StateType, TimeContextType };
