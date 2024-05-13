import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/header/Header";
import Courses from "./pages/Courses";
import YoutubeVideos from "./pages/YoutubeVideos";
import StudentProjects from "./pages/StudentProjects";
import ContactUs from "./pages/ContactUs";
import { client } from "./utils/sanity/client";
import MernStack from "./pages/MernStack";

function App() {
  
  async function getContent() {
    const CONTENT_QUERY = `*[_type == "page"]`;
    const content = await client.fetch(CONTENT_QUERY);
    return content;
  }

  // Log content to console
  getContent().then((content) => console.log(content));

  return (
    <main className="bg-[#0D1117]">
      <BrowserRouter>
        <Header />
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
