import { Routes, Route } from "react-router-dom";
import ScrollToTop from "./Components/ScrollToTop";
import Layout from "./Layout";
import Hjem from "./Pages/Hjem";
import OmMeg from "./Pages/OmMeg";
import Diktboker from "./Pages/Diktboker";
import EnkeltProdukt from "./Pages/Diktboker/EnkeltProdukt";
import Kontakt from "./Pages/Kontakt";
import Gjestebok from "./Pages/Gjestebok";
import Presse from "./Pages/Presse";
import Handmade from "./Pages/Diktgaver";
import NotFound from "./Pages/NotFound";
import Personvern from "./Pages/Personvern";

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Hjem />} />
          <Route path="om-meg" element={<OmMeg />} />
          <Route path="diktboker" element={<Diktboker />} />
          <Route path="diktboker/:slug" element={<EnkeltProdukt />} />
          <Route path="kontakt" element={<Kontakt />} />
          <Route path="gjestebok" element={<Gjestebok />} />
          <Route path="presse" element={<Presse />} />
          <Route path="handmade" element={<Handmade />} />
          <Route path="NotFound" element={<NotFound />} />
          <Route path="personvern" element={<Personvern />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
