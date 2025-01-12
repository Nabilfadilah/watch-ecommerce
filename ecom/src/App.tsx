import {Route, BrowserRouter as Router, Routes} from "react-router-dom";
import Sidebar from "./components/layouts/Sidebar";
import MainContent from "./components/layouts/MainContent";
import ProductPage from "./components/layouts/ProductPage";
import TopSellers from "./components/layouts/TopSellers";
import PopularBlogs from "./components/layouts/PopularBlogs";

function App() {
  return (
    <Router>
      <div className="flex h-screen overflow-hidden">
        {/* Sidebar */}
        <Sidebar className="bg-gray-100 border-r p-4" />

        {/* Main Content Area */}
        <div className="flex-1 flex flex-col h-full overflow-hidden">
          {/* Header (Optional) */}
          <header className="bg-gray-200 shadow-xl p-4">
            <h1 className="text-2xl font-semibold text-gray-900">Dashboard</h1>
          </header>

          {/* Content and Widgets */}
          <div className="flex-1 flex overflow-y-auto">
            {/* Main Content */}
            <main className="flex-1 p-6 bg-gray-50 overflow-y-auto items-center justify-center">
              <Routes>
                <Route path="/" element={<MainContent />} />
                <Route path="/product/:id" element={<ProductPage />} />
              </Routes>
            </main>

            {/* Sidebar Widgets */}
            <aside className="w-1/4 min-w-[250px] bg-gray-100 p-4 space-y-4 border-l overflow-y-auto">
              <TopSellers className="bg-white shadow-md rounded-md p-4" />
              <PopularBlogs className="bg-white shadow-md rounded-md p-4" />
            </aside>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
