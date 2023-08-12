import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import IPhone13Mini7 from "./pages/i-phone13-mini7";
import FrameComponent3 from "./pages/frame-component3";
import { useEffect } from "react";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/frame-1000009409":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<IPhone13Mini7 />} />
      <Route path="/frame-1000009409" element={<FrameComponent3 />} />
    </Routes>
  );
}
export default App;
