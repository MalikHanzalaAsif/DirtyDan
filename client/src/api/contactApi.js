import axios from 'axios';
import toastEmitter from '../components/ui/toast';

export const sendEmails = async (formData) => {
    try{
        const response = await axios.post(`${import.meta.env.VITE_SERVER_URL}/contact`, {formData});
        toastEmitter({
            title: 'Form Submitted Succesfully!',
            type: "success"
        });

    } catch (err) {
        console.log(err);
        toastEmitter({
            title: "something went wrong! try again later.",
            type: "error",
        });
    }
}