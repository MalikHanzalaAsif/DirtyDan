import './App.css';
import WebRoutes from './routes/WebRoutes';
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';



function App() {

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  return (
    <>
      <WebRoutes />
    </>
  )
}

export default App;