import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Layout } from "@/components/layout/Layout"
import { ScrollToTop } from "@/components/ScrollToTop"
import { Home } from "@/pages/Home"
import { AboutUs } from "@/pages/AboutUs"
import { Services } from "@/pages/Services"
import { Contact } from "@/pages/Contact"

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<AboutUs />} />
          <Route path="services" element={<Services />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
