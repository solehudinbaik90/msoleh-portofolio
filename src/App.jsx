import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import AOS from "aos";
import { ToastContainer } from "react-toastify";
import Modal from "react-modal";

import { ThemeProvider } from "./context/ThemeContext";
import Sidebar from "./components/layout/Sidebar";
import ThemeSwitcher from "./components/layout/ThemeSwitcher";

import Home from "./pages/Home";
import About from "./pages/About";
import Service from "./pages/Service";
import Portfolio from "./pages/Portfolio";
import News from "./pages/News";
import Contact from "./pages/Contact";

Modal.setAppElement("#root");

export default function App() {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      easing: "ease",
      once: false,
    });
  }, []);

  return (
    <ThemeProvider>
      <div className="msoleh_tm_all_wrap">
        <ThemeSwitcher />
        <div className="react-tabs" data-rttabs="true">
          <Sidebar />
          <div className="rightpart">
            <div className="rightpart_in">
              <div className="msoleh_tm_section">
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/service" element={<Service />} />
                  <Route path="/portfolio" element={<Portfolio />} />
                  <Route path="/news" element={<News />} />
                  <Route path="/contact" element={<Contact />} />
                </Routes>
              </div>
            </div>
          </div>
        </div>
        <ToastContainer />
      </div>
    </ThemeProvider>
  );
}