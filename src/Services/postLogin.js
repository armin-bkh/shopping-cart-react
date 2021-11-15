import http from "./httpServices";

const postLogin = (user) => {
    return http.post("/user/login", user);
}

export default postLogin;