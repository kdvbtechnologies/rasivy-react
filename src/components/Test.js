import { useEffect } from "react";

export default function Test() {
  function installButton() {
    console.log("download");
    let prompt;
    prompt.prompt();
  }

  useEffect(() => {
    window.addEventListener("click", installButton);
  }, []);

  return (
    <>
      <button>Install</button>
    </>
  );
}
