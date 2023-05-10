import Home from "./pages/Home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login/Login";
import Bus from "./pages/bus/Bus";
import List from "./pages/list/List";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
          </Route>
          <Route path="login" element={<Login />} />
          <Route path="users">
            <Route index element={<List />} />
          </Route>
          <Route path="bus" element={<Bus />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
