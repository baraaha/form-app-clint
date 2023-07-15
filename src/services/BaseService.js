class BaseService {
    handleRequestError = (error) => {
        if (error.response) {
            // The request was made and the server responded with a status code
            // Handle specific status codes here
            if (error.response.status === 404) {
                const customError = {
                    ExceptionType: 'NotFoundError',
                    type: 'error',
                    message: 'Expenses not found',
                };
                throw customError;
            } else if (error.response.status === 422) {
                const validationData = error.response.data.errors; // Example: Access validation data
                const customError = {
                    ExceptionType: 'ValidationError',
                    type: 'error',
                    message: 'Validation failed',
                    validationData: validationData, // Include validation data in the error object
                };
                throw customError;
            } else {
                const customError = {
                    ExceptionType: 'ServerError',
                    type: 'error',
                    message: 'Server error',
                };
                throw customError;
            }
        } else if (error.request) {
            // The request was made but no response was received
            const customError = {
                ExceptionType: 'NoResponseError',
                type: 'error',
                message: 'No response from server',
            };
            throw customError;
        } else {
            // Something happened in setting up the request that triggered an error
            const customError = {
                ExceptionType: 'UnknownError',
                type: 'error',
                message: 'Error occurred',
            };
            throw customError;
        }
    };

}

export default BaseService;