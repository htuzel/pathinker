import axios from "axios";

async function Requester({ url, method = "get", data = null }) {
    const result = await axios({
        method: method,
        url:  "/api/" + url,
        data,
        headers:{
            'USER-AUTH-TOKEN':sessionStorage.getItem('jwtToken'),
            'Content-Type':'application/json'
        }
    })
    .then(res => {
        return res;
    })
    .catch(err => {          
        alert(err);
        return Promise.reject(err);
    });

    return result.data;
}

const webClient = {
    register: data => Requester({ method: 'post', url: 'register', data }),
    login: data => Requester({ method: 'post', url: 'authenticate', data })
};

export default webClient;