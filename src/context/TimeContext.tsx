import { createContext } from "react";

import type { TimeContextType } from "../typings";

const TimeContext = createContext({} as TimeContextType);

export default TimeContext;
