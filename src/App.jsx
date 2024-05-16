import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/header/Header";
import Courses from "./pages/Courses";
import YoutubeVideos from "./pages/YoutubeVideos";
import StudentProjects from "./pages/StudentProjects";
import ContactUs from "./pages/ContactUs";
import MernStack from "./pages/MernStack";
import { Toaster } from "react-hot-toast";


function App() {

  return (
    <main className="bg-[#0D1117]">
      <BrowserRouter>
        <Header />
        <Toaster position="bottom-center" reverseOrder={false} />
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/courses" element={<Courses />} /> */}
          <Route path="/mern-stack-development" element={<MernStack />} />
          <Route path="/student-projects" element={<StudentProjects />} />
          <Route path="/youtube-videos" element={<YoutubeVideos />} />
          <Route path="/contact-us" element={<ContactUs />} />
        </Routes>
      </BrowserRouter>
    </main>
  );
}

export default App;
