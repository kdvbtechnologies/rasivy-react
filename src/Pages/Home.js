import Navigation from "../components/Navigation";
import HomeAction from "../components/HomeAction";

export default function Home() {
  const family = {
    fontFamily:
      '"Source Sans Pro", "Helvetica Neue", Helvetica, Arial, sans-serif',
  };
  return (
    <div style={family}>
      <Navigation />
      <HomeAction />
    </div>
  );
}
