import Navigation from "../components/Navigation";
import PhotosAction from "../components/PhotosAction";

export default function Photos() {
  const family = {
    fontFamily:
      '"Source Sans Pro", "Helvetica Neue", Helvetica, Arial, sans-serif',
  };
  return (
    <div style={family}>
      <Navigation />
      <PhotosAction />
    </div>
  );
}
