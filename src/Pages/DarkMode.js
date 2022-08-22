import DarkModeAction from "../components/DarkModeAction";
import Navigation from "../components/Navigation";

export default function DarkMode() {
  const family = {
    fontFamily:
      '"Source Sans Pro", "Helvetica Neue", Helvetica, Arial, sans-serif',
  };
  return (
    <div style={family}>
      <Navigation />
      <DarkModeAction />
    </div>
  );
}
