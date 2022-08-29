import Navigation from "../components/Navigation";
import ProfileAction from "../components/ProfileAction";

export default function Profile() {
  const family = {
    fontFamily:
      '"Source Sans Pro", "Helvetica Neue", Helvetica, Arial, sans-serif',
  };
  return (
    <div style={family}>
      <ProfileAction />
    </div>
  );
}
