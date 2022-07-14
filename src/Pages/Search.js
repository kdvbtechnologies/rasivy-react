import Navigation from "../components/Navigation";
import SearchAction from "../components/SearchAction";

export default function Search() {
  const family = {
    fontFamily:
      '"Source Sans Pro", "Helvetica Neue", Helvetica, Arial, sans-serif',
  };
  return (
    <div style={family}>
      <Navigation />
      <SearchAction />
    </div>
  );
}
