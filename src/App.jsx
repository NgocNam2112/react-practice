import { Link, Outlet } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="container">
      <ul className="sideBar">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/error">Error</Link>
        </li>
      </ul>
      <div className="todo_container">
        <Outlet />
      </div>
    </div>
  );
}

export default App;
