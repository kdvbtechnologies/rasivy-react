import { useEffect, useState } from "react";

export default function Test() {
  //const [supportsPWA, setSupportsPWA] = useState(false);
  const [promptInstall, setPromptInstall] = useState(null);

  useEffect(() => {
    async function handler(e) {
      e.preventDefault();
      console.log("we are being triggered");
      //setSupportsPWA(true);
      setPromptInstall(e);
    }
    window.addEventListener("beforeinstallprompt", handler);

    return () => window.removeEventListener("transitionend", handler);
  }, []);

  function onClick(e) {
    e.preventDefault();
    if (!promptInstall) {
      return;
    }
    promptInstall.prompt();
  }

/*
  if (!supportsPWA) {
    return null;
  }
*/

  return (
    <>
      <button onClick={onClick}>Install</button>
    </>
  );
}
