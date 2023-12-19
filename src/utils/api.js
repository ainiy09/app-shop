const onResponce = (res)=>{
    return res.ok? res.json(): Promise.reject(`Ошибка ${res.status}`)
}

class Api {
    constructor({baseUrl, headers}){
        this._headers = headers;
        this._baseUrl = baseUrl;
    }
    getProductList(){
        return fetch(`${this._baseUrl}/products`, {headers: this._headers}).then(
            onResponce
        );
    }
    getuserInfo(){
        return fetch(`${this._baseUrl}/users/me`, {headers: this._headers}).then(
            onResponce
        )
    }
    search(searchQuery) {
        return fetch(`${this._baseUrl}/products/search?query=${searchQuery}`, {headers: this._headers}).then(
            onResponce
        )
    }
    setUserInfo(dataUser){
        return fetch(`${this._baseUrl}/users/me`, {headers: this._headers, method: 'PATCH', body: JSON.stringify(dataUser)}).then(
            onResponce
        )
    }
}

const config = {
    baseUrl: 'https://api.react-learning.ru',
    headers: {
        'content-type': 'application/json',
        Authorization: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTY0ZWNlNWFmMjA3YTRlZGJmZGE1MmQiLCJncm91cCI6Imdyb3VwLTkiLCJpYXQiOjE3MDExNTMwMjMsImV4cCI6MTczMjY4OTAyM30.ypMb3P0SRQrOc_yecIs55pMxs_tS1msPW7ttgcBBl8Y',
    },
};

const api = new Api(config);

export default api;