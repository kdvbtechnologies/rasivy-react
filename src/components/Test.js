import { useEffect } from "react";

export default function Test() {
  function installButton() {
    console.log("one");
  }

  useEffect(() => {
    window.addEventListener("click", installButton);
  }, []);

  return (
    <>
      <button onClick={installButton}>Install</button>
    </>
  );
}
