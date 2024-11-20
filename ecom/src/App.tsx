import { Route, BrowserRouter as Router, Routes } from "react-router-dom"
import Sidebar from "./components/layouts/Sidebar"
import MainContent from "./components/layouts/MainContent"
import ProductPage from "./components/layouts/ProductPage"
import TopSellers from "./components/layouts/TopSellers"
import PopularBlogs from "./components/layouts/PopularBlogs"

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

          <div>
            <TopSellers />
            <PopularBlogs />
          </div>
        </div>
      </div>
    </Router>
  )
}

export default App
