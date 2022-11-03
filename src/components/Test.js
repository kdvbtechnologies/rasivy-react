//import { useEffect } from "react";

export default function Test() {
  let deferredPrompt;
  window.addEventListener("beforeinstallprompt", (e) => {
    deferredPrompt = e;
  });
  console.log(deferredPrompt);

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
