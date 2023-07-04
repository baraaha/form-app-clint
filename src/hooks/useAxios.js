import { useState } from "react";
import axios from "../api/axiosConfig";

const useAxios = () => {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setLoading] = useState(false);

  const fetchData = async (url, method = "GET", data = null) => {

    setLoading(true);

    try {
      const options = {
        url,
        method,
        data,
      };

      const response = await axios(options);
      // console.log('response', response);

      setResponse(response.data);
      setError(null);
    } catch (error) {
      if (error.response) {
        const { status, data } = error.response;
        const errorMessage = handleErrorResponse(status, data);
        setError(errorMessage);
      } else {
        setError("Network Error");
      }
    }

    setLoading(false);
  };

  const handleErrorResponse = (status, data) => {
    if (status === 422 && data.errors) {
      const errorMessages = [];

      for (const key in data.errors) {
        if (data.errors.hasOwnProperty(key)) {
          errorMessages.push(data.errors[key][0]);
        }
      }

      return errorMessages.join(", ");
    }

    // Handle other error codes here if needed
    // You can customize the error messages based on the error codes

    return "An error occurred";
  };

  return { response, error, isLoading, fetchData };
};

export default useAxios;
