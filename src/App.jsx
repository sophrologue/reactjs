import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { AboutMe } from "./pages/AboutMe";

import { CancerSession } from "./pages/sessions/CancerSession";
import { ChildSession } from "./pages/sessions/ChildSession";
import { StressSession } from "./pages/sessions/StressSession";
import { HyponysisSession } from "./pages/sessions/HyponysisSession";
import { Sophologie } from "./pages/Sophologie";
import { PainSession } from "./pages/sessions/PainSession";
import { PricePage } from "./pages/PricePage";
import { ContactPage } from "./pages/ContactPage";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<AboutMe />} path="/about" />
        <Route element={<Sophologie />} path="/sophrologie" />
        <Route element={<PricePage />} path="/price" />
        <Route element={<ContactPage />} path="/contact" />
        <Route element={<CancerSession />} path="/sophrologie/cancer" />
        <Route element={<PainSession />} path="/sophrologie/pain" />
        <Route
          element={<ChildSession />}
          path="/sophrologie/child_adolescent"
        />
        <Route element={<StressSession />} path="/sophrologie/work_stress" />
        <Route element={<HyponysisSession />} path="/sophrologie/hyponysis" />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
