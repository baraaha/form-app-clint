import axios from "../api/axiosConfig";
import BaseService from "./BaseService";

class AuthServices extends BaseService {

    /**
     * Retrieve data base on url.
     * @returns {Promise<Array>} Array of data.
     * @throws {Error} If an error occurs during the request.
     */
    async get(url) {
        try {
            const response = await axios({
                url: url,
                method: "GET",
            });

            return response.data;
        }
        catch (error) {
            this.handleRequestError(error);
            return [];
        }
    }



    /**
     * Create a new data.
     * @param {Object} data - The data object to create.
     * @returns {Promise<Object|null>} The created data object if successful, null otherwise.
     * @throws {Error} If an error occurs during the request.
     */
    async post(data, url) {
        try {
            const response = await axios({
                url: url,
                method: "POST",
                data: data,
            });
            return response.data;
        } catch (error) {
            this.handleRequestError(error);
            return null;
        }
    }


}

export default AuthServices;
