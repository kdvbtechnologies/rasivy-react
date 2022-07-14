import MenuAction from "../components/MenuAction";
import Navigation from "../components/Navigation";

export default function Menu() {
  const family = {
    fontFamily:
      '"Source Sans Pro", "Helvetica Neue", Helvetica, Arial, sans-serif',
  };
  return (
    <div style={family}>
      <Navigation />
      <MenuAction />
    </div>
  );
}
