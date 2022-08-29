import SettingsNav from "../components/SettingsNav";

export default function Settings() {
  const family = {
    fontFamily:
      '"Source Sans Pro", "Helvetica Neue", Helvetica, Arial, sans-serif',
  };
  return (
    <div style={family}>
      <SettingsNav />
    </div>
  );
}
