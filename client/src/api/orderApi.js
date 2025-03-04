import axios from "axios";
import toastEmitter from "../components/ui/toast";

export const verifyPaymentApi = async (orderId, formData) => {
    try {
        let response = await axios.post(`${import.meta.env.VITE_SERVER_URL}/verify-payment`, {orderId, formData}, {withCredentials: true});
        toastEmitter({
            title: response.data.message,
            type: response.data.type,
        });
        console.log("Payment verification response:", response.data);
    } catch (error) {
        console.error("Failed to verify payment:", error);
        toastEmitter({
            title: "payment verification failed",
            type: "error",
        });
    }
};