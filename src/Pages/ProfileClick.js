import ProfileClickNav from "../components/ProfileClickNav";

export default function ProfileClick() {
  const family = {
    fontFamily:
      '"Source Sans Pro", "Helvetica Neue", Helvetica, Arial, sans-serif',
  };
  return (
    <div style={family}>
      <ProfileClickNav />
    </div>
  );
}
