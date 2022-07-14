import Navigation from "../components/Navigation";
import RasigifAction from "../components/RasigifAction";

export default function RasiGIF() {
  const family = {
    fontFamily:
      '"Source Sans Pro", "Helvetica Neue", Helvetica, Arial, sans-serif',
  };
  return (
    <div style={family}>
      <Navigation />
      <RasigifAction />
    </div>
  );
}
