import { Link, Outlet } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <>
      <ul className="sideBar">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/error">Error</Link>
        </li>
      </ul>
      <Outlet />
    </>
  );
}

export default App;
