import TimeProvider from "./context/TimeProvider";

import Wrapper from "./components/wrapper/Wrapper";

function App() {
  return (
    <TimeProvider>
      <Wrapper />
    </TimeProvider>
  );
}

export default App;
