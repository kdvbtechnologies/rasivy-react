import Navigation from "../components/Navigation";
import StreamingAction from "../components/StreamingAction";

export default function Streaming() {
  const family = {
    fontFamily:
      '"Source Sans Pro", "Helvetica Neue", Helvetica, Arial, sans-serif',
  };
  return (
    <div style={family}>
      <Navigation />
      <StreamingAction />
    </div>
  );
}
