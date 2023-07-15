import { useEffect, useState } from "react";

// baseUrl is the base URL of the API server
const baseUrl = "http://192.168.43.106:8000/api";

const useFetch = () => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const fetchData = (
        url,
        method = "GET",
        data = null,
    ) => {
        setLoading(true);
        setError("");

        fetch(
            `${baseUrl}/${url}`,
            {
                method: method,
                headers: {
                    "Content-Type": "application/json",
                },
                body: data ? JSON.stringify(data) : null,
            }
        )
            .then((response) => response.json())
            .then((data) => {
                if (data.error) {
                    setError(data.error);
                    setData(null);
                } else {
                    setError("");
                    setData(data.data);
                }
                setLoading(false);
            })
            .catch((error) => {
                setError("Failed to fetch data. ahmed", error);
                setData(null);
                setLoading(false);
            });
    };

    return { data, loading, error, fetchData };
};

export default useFetch;
