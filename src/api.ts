/**
 * @author supunmadhuranga
 * @created 2025-07-05
 * @project vite1
 * @description
 */

import axios from "axios";

export const backendApi = axios.create({
    baseURL: "http://localhost:3000/api"
});
