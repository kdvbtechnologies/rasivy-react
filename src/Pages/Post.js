import Navigation from "../components/Navigation";
import PostAction from "../components/PostAction";

export default function Post() {
  const family = {
    fontFamily:
      '"Source Sans Pro", "Helvetica Neue", Helvetica, Arial, sans-serif',
  };
  return (
    <div style={family}>
      <Navigation />
      <PostAction />
    </div>
  );
}
