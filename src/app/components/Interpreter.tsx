// import redux toolkit
import type { RootState } from "@/store";
import { useSelector } from "react-redux";
import interpreter from "@/compiler/interpreter";

export default function Interpreter() {
  // redux toolkit
  const pcode = useSelector((state: RootState) => state.pcode.value);
  return (
    <div
      onClick={() => {
        if (pcode) {
          interpreter(pcode);
        }
      }}
    >
      Interpreter
    </div>
  );
}
