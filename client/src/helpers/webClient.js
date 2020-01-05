import axios from "axios";

async function Requester({ url, method = "get", data = null }) {

    const result = await axios({
        method: method,
        url: `http://149.202.183.108:9090/api/v1/${url}`,
        data,
        headers:{
            'USER-AUTH-TOKEN':sessionStorage.getItem('jwtToken'),
            'Content-Type':'application/json'

            }
    })
        .then(res => 
            {
                return res;
            }
            )
        .catch(err => {          
            alert(err);
            return Promise.reject(err);
        });

    return result.data;
}

const webClient = {
    signup: data => Requester({ method: 'post', url: 'login', data }),
};

export default webClient;