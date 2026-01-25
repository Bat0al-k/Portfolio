import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import { LanguageProvider } from "./context/LanguageContext";
import Index from "./components/ui/Cursor/Cursor";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <LanguageProvider>
      <Toaster position="top-center" toastOptions={{
        duration: 3000,
        style: {
          background: "#642893",
          color: "#fff",
        },
      }} />
      <Index/>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
        </Routes>
      </BrowserRouter>
    </LanguageProvider>
  );
}

export default App;
