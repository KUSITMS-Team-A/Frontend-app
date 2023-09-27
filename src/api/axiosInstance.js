import axios from "axios";

const api = axios.create({
  baseURL: "",
  timeout: 1000,
  // headers:{}
});

// TRY-CATCH는 사용하는 컴포넌트에서 
