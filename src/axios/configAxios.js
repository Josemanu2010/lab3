import axios from "axios";
// import { useDispatch } from "react-redux";
import { setTokenUser } from "../redux/usersSlice";
import { store } from "../redux/store";


// const disptach = useDispatch();

// let tokenUser;



export const iAX = axios.create(
    {
        baseURL: "https://reqres.in/api",
        headers: {
            'Content-Type': 'application/json'
        }
    }
);

iAX.interceptors.request.use(
    config => {
        const mt = store.getState();
        // console.log(mt.users.tokenUser);

        // console.log("interceptor request");
        config.headers['Authorization'] = `Bearer ${mt.users.tokenUser}`;
        return config;
    },
    error => {
        return (Promise.reject(error));
    }
)

iAX.interceptors.response.use(
    response => {
        console.log("interceptor response");
        // console.log(response);
        // tokenUser = response.data.token;

        // disptach(setTokenUser(response.data.token))
        // console.log(response);

        return response;
    },
    error => {
        return (Promise.reject(error));
    }
)



