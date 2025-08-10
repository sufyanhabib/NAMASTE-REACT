import ReactDOM from "react-dom/client";
import Header from "../src/components/Header";
import Body from "./components/Body";

function AppLayout() {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
