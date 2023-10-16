import React from "react";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Accueil from "./appli/accueil/Accueil";
import 'bulma/css/bulma.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Signin from "./appli/signin/Signin";
import Homepage from "./appli/Homepage";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/accueil" element={<Accueil />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="*" element={<Homepage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
