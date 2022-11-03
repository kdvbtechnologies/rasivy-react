import { useEffect } from "react";

export default function Test() {
  function installButton() {
    console.log("toutes les contitions sont reunies");
  }

  useEffect(() => {
    window.addEventListener("beforeinstallprompt", installButton);
  }, []);

  return (
    <>
      <button>Install</button>
    </>
  );
}
