import Navigation from "../components/Navigation";
import SettingsAction from "../components/SettingsAction";

export default function Settings() {
  const family = {
    fontFamily:
      '"Source Sans Pro", "Helvetica Neue", Helvetica, Arial, sans-serif',
  };
  return (
    <div style={family}>
      <Navigation />
      <SettingsAction />
    </div>
  );
}
