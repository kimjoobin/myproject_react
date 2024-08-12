import React from 'react';
import './App.css';
import {BrowserRouter, Route, RouterProvider, Routes} from "react-router-dom";
import BoardList from "./components/board/BoardList";
import Home from "./components/Home";
import router from "../src/components/router/index";

const App: React.FC = () => {
  return (
      <div className={"App"}>
          <RouterProvider router={router} />
          {/*<BrowserRouter>
              <Routes>
                  <Route path="/" element={<Home/>}/>
                  <Route path="/board/list" element={<BoardList/>}/>
              </Routes>
          </BrowserRouter>*/}
      </div>

  );
}

export default App;
