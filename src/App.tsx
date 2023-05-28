import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import {
  useGetTODOsQuery,
  useLazyGetTODOsQuery,
  useVerifyOTPMutation,
} from "./services/api/authenticationAPI";
import TextField from "./components/common/Inputs/TextField";

function App() {
  const [getTodos, { data: todosData }] = useLazyGetTODOsQuery();
  const [verifyOTP, { data: otpData }] = useVerifyOTPMutation();

  return (
    <>
      <div>{JSON.stringify(todosData)}</div>
      <button
        onClick={() => {
          getTodos(1);
        }}
      >
        CLICK ME
      </button>
      <TextField />
    </>
  );
}

export default App;
