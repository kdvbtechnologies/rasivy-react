import LanguageAction from "../components/LanguageAction";
import Navigation from "../components/Navigation";

export default function Language() {
  const family = {
    fontFamily:
      '"Source Sans Pro", "Helvetica Neue", Helvetica, Arial, sans-serif',
  };
  return (
    <div style={family}>
      <Navigation />
      <LanguageAction />
    </div>
  );
}
