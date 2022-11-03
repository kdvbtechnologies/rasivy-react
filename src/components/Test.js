//import { useEffect } from "react";

export default function Test() {
  window.addEventListener("beforeinstallprompt", (e) => {
    const deferredPrompt = e;
    console.log(deferredPrompt);
  });

  /*
  function installButton(e) {
    console.log("fenetre download");
    deferredPrompt = e;
  }

  useEffect(() => {
    window.addEventListener("beforeinstallprompt", installButton);
  }, []);
*/
  return (
    <>
      <button>Install</button>
    </>
  );
}
