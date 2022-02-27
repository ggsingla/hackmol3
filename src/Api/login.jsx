import axios  from "axios";

export default function login(email,password){
    return axios.post('https://hackmol3.herokuapp.com/login',{email:email,password:password},{headers:{'Content-Type':'application/json'}});
};