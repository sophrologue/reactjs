import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { AboutMe } from "./pages/AboutMe";
import { Sophrologie } from "./pages/Sophrologie";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<AboutMe />} path="/about" />
        <Route element={<Sophrologie />} path="/sophrologie" />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
