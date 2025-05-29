import { useRef, useEffect } from "react";

export default function AutoFocusInput() {
  const inputRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    inputRef.current?.focus();
  }, []);
  return (
    <div>
      <h2>Auto Focus Input</h2>
      <input type="text" ref={inputRef} placeholder="enter text..." />
    </div>
  );
}
