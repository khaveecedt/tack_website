import {Routes, Route} from "react-router-dom";
import Layout from "./Layout";
import MainPage from "./pages/MainPage";
import ExpPage from "./pages/ExpPage";
import ProjectPage from "./pages/ProjectPage";
import ContactPage from "./pages/ContactPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<MainPage />} />
        <Route path="/projects" element={<ProjectPage />} />
        <Route path="/experiences" element={<ExpPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Route>
    </Routes>
  )
}

export default App
