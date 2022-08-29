import DarkModeAction from "../components/DarkModeAction";

export default function DarkMode() {
  const family = {
    fontFamily:
      '"Source Sans Pro", "Helvetica Neue", Helvetica, Arial, sans-serif',
  };
  return (
    <div style={family}>
      <DarkModeAction />
    </div>
  );
}
