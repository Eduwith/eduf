import axios from "axios";

export default function setAuthorizationToken(token) {
  if (token) {
    console.log('token!!!!', token)
    axios.defaults.headers.common['Authorization'] = token;
  } else {
    delete axios.defaults.headers.common['Authorization'];
  }
}