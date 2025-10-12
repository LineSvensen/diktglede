import { Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Hjem from "./Pages/Hjem";
import OmMeg from "./Pages/OmMeg";
import Diktboker from "./Pages/Diktboker";
import EnkeltProdukt from "./Pages/Diktboker/EnkeltProdukt";
import Kontakt from "./Pages/Kontakt";
import Kundeomtaler from "./Pages/Kundeomtaler";
import Presse from "./Pages/Presse";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Hjem />} />
        <Route path="om-meg" element={<OmMeg />} />
        <Route path="diktboker" element={<Diktboker />} />
        <Route path="diktboker/:slug" element={<EnkeltProdukt />} />
        <Route path="kontakt" element={<Kontakt />} />
        <Route path="kundeomtaler" element={<Kundeomtaler />} />
        <Route path="presse" element={<Presse />} />
      </Route>
    </Routes>
  );
}

export default App;
