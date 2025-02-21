import { useState, useEffect } from "react";

const useFetch = (url, method = "GET", body) => {

    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            setError(null);

            try {
                const res = await fetch(url, {
                    method,
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: method !== "GET" ? JSON.stringify(body) : undefined,
                });

                const json = await res.json();

                if (!res.ok) {
                    throw new Error(json);
                }

                setData(json);
            } catch (err) {
                setError(err);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [url, method, body]);

    return { data, loading, error };
};

export default useFetch;
