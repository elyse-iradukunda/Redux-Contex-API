import { useRef, useState } from "react";

export default function TestRef() {
  const refCount = useRef(0);
  const [stateCount, setStateCount] = useState(0);

  const handleClick = () => {
    refCount.current++;         // updates silently
    setStateCount(refCount.current); // triggers re-render
  };

  console.log("Component re-rendered");

  return (
    <div>
      <h2>State: {stateCount}</h2>
      <h2>Ref: {refCount.current}</h2>

      <button onClick={handleClick}>Click me</button>
    </div>
  );
}