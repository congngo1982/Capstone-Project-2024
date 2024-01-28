import axios from "axios";

export const TOKEN_EDU = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI3ZGUzMWZhZi1mMDQwLTRiMGUtOGZmYi03ZTUwZWQxMzdhNzQiLCJlbWFpbCI6ImFkbWluQFNpbHZlckpld2VscnkuY29tLnVrIiwicm9sZUlkIjoiMSIsImV4cCI6MTcwODUzMTQzNSwiaXNzIjoiaHR0cDovL2xvY2FsaG9zdDo1MTcyIiwiYXVkIjoiaHR0cDovL2xvY2FsaG9zdCJ9.QD88A2nhHfRLMSuSYFirgFuq3kAoaCFLlu-WFQZ2vNI";

export const configHeaders = () => {
    return {
        tokenEdu : TOKEN_EDU,
    };
};
export const BASE_URL = "http://localhost:5172/api";

//axois instance
export const https = axios.create({
    baseURL: BASE_URL,
    headers: {
        tokenEdu : TOKEN_EDU,
    }
  });