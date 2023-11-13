import AddUser from "./AddUser";
import "./App.css";
import DeleteUser from "./DeleteUser";
import DisplayUser from "./DisplayUser";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="container">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AddUser />}></Route>
          <Route path={"/userdata"} element={<DisplayUser />}></Route>

          <Route path={"/deleteuser"} element={<DeleteUser />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
