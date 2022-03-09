import http from "k6/http";
import { sleep, check } from "k6";

export const options = {
    stages: [
        {duration: '10s', target: 50}
    ]
}

export default function () {
    const url = 'https://petstore.swagger.io/v2/user';
    const addUser = JSON.stringify({
        id: 4,
        username: "Kolya",
        firstName: "Kola",
        lastName: "Reebok",
        email: "fak2kkf@mail.com",
        password: "1234qwer",
        phone: "0933454872",
        userStatus: 0
    })
    const params = {
        headers: {
            'Content-Type': 'application/json'
        }
    }
    const res = http.post(url, addUser, params);
    check(res, {'status code was 200': (res) => res.status == 200})
}