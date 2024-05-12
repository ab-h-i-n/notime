import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/header/Header";
import Courses from "./pages/Courses";
import YoutubeVideos from "./pages/YoutubeVideos";
import StudentProjects from "./pages/StudentProjects";
import ContactUs from "./pages/ContactUs";

function App() {
  return (
    <main className="bg-[#0D1117]">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/student-projects" element={<StudentProjects />} />
          <Route path="/youtube-videos" element={<YoutubeVideos />} />
          <Route path="/contact-us" element={<ContactUs />} />
        </Routes>
      </BrowserRouter>
    </main>
  );
}

export default App;
