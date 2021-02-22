import axios from "axios";

const instance = axios.create({
  // THE Live server endpoint
  baseURL: 'https://us-central1-challenge-9e6d7.cloudfunctions.net/api' 

  //Local server endpoint for testing
  //'http://localhost:5001/e-clone-d1d2e/us-central1/api'
 
});

export default instance;
