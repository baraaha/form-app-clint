import axios from "../api/axiosConfig";
import BaseService from "./BaseService";

class FormServices extends BaseService {




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


    async getForms() {
        try {
            const response = await axios({
                url: "forms",
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
     * Create a new purchase.
     * @param {Object} purchase - The purchase object to create.
     * @returns {Promise<Object|null>} The created purchase object if successful, null otherwise.
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

    async getSuppliers() {
        try {
            const response = await axios({
                url: "supplier",
                method: "GET",
            });
            return response.data;
        } catch (error) {
            this.handleRequestError(error);
            return null;
        }
    }
}

export default FormServices;
