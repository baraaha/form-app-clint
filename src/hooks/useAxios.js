import { useState } from "react";
import axios from "../api/axiosConfig";

const useAxios = () => {
  const [response, setResponse] = useState(null);
  const [errors, setErrors] = useState(null);
  const [validationError, setValidationError] = useState(null);
  const [isLoading, setLoading] = useState(true);

  const fetchData = async (url, method = "GET", data = null, headers) => {

    setValidationError(null);
    setErrors(null);
    setLoading(true);
    setResponse(null);



    try {
      const options = {
        url,
        method,
        data,
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      };
      // header

      const response = await axios(options);


      setResponse(response.data);

      if (response.status == 201) {

        setErrors({ type: "success", message: 'تم انشاء البيانات بنجاح' });

      }
      else if (response.data.message) {
        // console.log('response', response);
        setErrors({ type: "success", message: response.data.message });
      }

    } catch (error) {
      if (error.response) {
        const { status, data } = error.response;
        handleErrorResponse(status, data);

      }

    }
    setLoading(false);

  };


  const fetchDataWithoutState = async (url, method = "GET", data = null) => {
    try {
      const options = {
        url,
        method,
        data,
      };

      const response = await axios(options);
      return response;

    } catch (error) {
      if (error.response) {
        const { status, data } = error.response;
        handleErrorResponse(status, data);
      }
      return null;
    }
  };

  const handleErrorResponse = (status, data) => {
    if (status === 422 && data.errors) {
      setValidationError(data.errors);

    }
    if (status === 401) {
      setErrors({ type: "error", message: "Unauthorized" });

    }
    if (status === 403) {
      setErrors({ type: "error", message: "Forbidden" });
    }
    if (status === 404) {
      setErrors({ type: "error", message: "الصفحه غير موجوده 404" });
    }
    if (status === 500) {
      setErrors({ type: "error", message: "مشكله فى السيرفر" });
    }
    if (status === 503) {
      setErrors({ type: "error", message: "Service Unavailable" });
    }


    // Handle other error codes here if needed
    // You can customize the error messages based on the error codes

    return "An error occurred";
  };

  return { response, validationError, error: errors, isLoading, fetchData, fetchDataWithoutState };
};

export default useAxios;
