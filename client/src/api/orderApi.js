import axios from "axios";

export const verifyPaymentApi = async (orderId, formData) => {
    try {
        const response = await axios.post(
            `${import.meta.env.VITE_SERVER_URL}/verify-payment`, 
            { orderId, formData }, 
            { withCredentials: true }
        );
        
        console.log("Payment verified successfully!");
        return response.data; 
    } catch (error) {
        console.error("Failed to verify payment", error.message);
        throw error;
    }
};
