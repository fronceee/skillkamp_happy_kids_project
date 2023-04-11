import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./containers/Home";
import OurStory from "./containers/OurStory";
import Contacts from "./containers/Contacts";
import Policy from "./containers/Policy"
import FAQ from "./containers/FAQ";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="our-story" element={<OurStory />} />
            <Route path="contacts" element={<Contacts />} />
            <Route path="policy" element={<Policy />} />
            <Route path="faq" element={<FAQ />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
