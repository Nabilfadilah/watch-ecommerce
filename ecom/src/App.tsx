import { Route, BrowserRouter as Router, Routes } from "react-router-dom"
import Sidebar from "./components/layouts/Sidebar"
import MainContent from "./components/layouts/MainContent"
import ProductPage from "./components/layouts/ProductPage"


function App() {

  return (
    <Router>
      <div className="flex h-screen">
        <Sidebar />

        <div className="rounded w-full flex justify-between flex-wrap">
          <Routes>
            <Route path="/" element={<MainContent />} />
            <Route path="/product/:id" element={<ProductPage />} />
          </Routes>
        </div>
      </div>
    </Router>
  )
}

export default App
