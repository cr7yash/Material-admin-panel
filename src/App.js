import SideBar from "./Components/SideBar/SideBar";
import TopBar from "./Components/TopBar/TopBar";
import "./App.css";
import HomePage from "./Pages/Home/HomePage";
export default function App() {
  return (
    <div>
      <TopBar />
      <div className="Container">
        <SideBar />
        <HomePage />
      </div>
    </div>
  );
}
