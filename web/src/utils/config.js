import axios from "axios"
import { toast } from "react-toastify";


export const apiUrl = "http://localhost:8080"
export const savedToken = localStorage.getItem("token")

export const notify = (msg) =>
toast(msg, {
  position: "bottom-right",
  autoClose: 1000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: false,
  draggable: false,
  progress: undefined,
  theme: "light",
});

export const axiosAuth = axios.create({
    baseURL:apiUrl,
    headers:{
        Accept: `application/json`,
        token:savedToken,
    }
})