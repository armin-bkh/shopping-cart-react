import http from "./httpServices";

const postSignup = (user) => {
    return http.post('/user/register', user);
}

export default postSignup;