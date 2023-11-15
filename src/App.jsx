import { BrowserRouter, Route, Routes } from "react-router-dom";
import Auth from "./views/Auth";
import HomeController from "./contollers/HomeController";
import DetailController from "./contollers/DetailController";
import HeaderView from "./views/HeaderView";
import axios from "axios";

const App = () => {
  axios.defaults.baseURL = "https://api.coincap.io/v2";

  return (
    <div className="p-5">
      <BrowserRouter>
        <HeaderView />
        <Routes>
          <Route path="/" element={<Auth />} />
          <Route path="/home" element={<HomeController />} />
          <Route path="/coin/:id" element={<DetailController />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
