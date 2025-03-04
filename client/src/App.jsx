import './App.css';
import WebRoutes from './routes/WebRoutes';
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';
import { PayPalScriptProvider } from '@paypal/react-paypal-js';


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
      <PayPalScriptProvider
        options={{
          "client-id": import.meta.env.VITE_PAYPAL_SANDBOX_CLIENT_ID,
          currency: "USD",
        }}
      >
        <WebRoutes />
      </PayPalScriptProvider>
    </>
  )
}

export default App;