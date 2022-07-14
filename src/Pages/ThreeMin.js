import Navigation from "../components/Navigation";
import ThreeMinAction from "../components/ThreeMinAction";

export default function ThreeMin() {
  const family = {
    fontFamily:
      '"Source Sans Pro", "Helvetica Neue", Helvetica, Arial, sans-serif',
  };
  return (
    <div style={family}>
      <Navigation />
      <ThreeMinAction />
    </div>
  );
}
