import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"


function App() {

  return (
    <main className="bg-[#0D1117]">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
      </Routes>
      </BrowserRouter>
    </main>
  )
}

export default App
