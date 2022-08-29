import LogoutAction from "../components/LogoutAction";

export default function Logout() {
  const family = {
    fontFamily:
      '"Source Sans Pro", "Helvetica Neue", Helvetica, Arial, sans-serif',
  };
  return (
    <div style={family}>
      <LogoutAction />
    </div>
  );
}
