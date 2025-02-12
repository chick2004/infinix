import { useState, useEffect } from "react";

type Method = "GET" | "POST" | "PUT" | "DELETE";

const useFetch = (url: string, method: Method = "GET", body?: any) => {

    const [data, setData] = useState<any>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<{ message: string; statusCode?: number } | null>(null);

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
            } catch (err: any) {
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
