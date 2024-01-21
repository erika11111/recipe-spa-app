import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import NotFound from "./components/NotFound";
import Category from "./components/Category.jsx";
import Recipe from "./components/Recipe.jsx";
export default function App() {
  return (
    <>
      <Router>
        <Header />
        <main className="container content">
          <Routes>
            <Route exact path="/" Component={Home} />
            <Route path="/about" Component={About} />
            <Route path="/contact" Component={Contact} />
            {/* useParams hook to pass dynamic data */}
            <Route path="/category/:name" Component={Category} />
            <Route path="/meal/:id" Component={Recipe} />
            {/* Not found page */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />{" "}
      </Router>
    </>
  );
}
