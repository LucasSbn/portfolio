import { useState, useEffect } from "react"

export const useFetch = (url) => {
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch(url);
                const json = await res.json();

                const repos = json.map((repo) => ({
                    id: repo.id,
                    name: repo.name,
                    language: repo.language,
                    repoLink: repo.html_url,
                    about: repo.description,
                    repoPage: repo.homepage,
                }));

                setData(repos);

                const list = ['chatbot', 'Sistema-para-Barbearia', 'expotec-roadmap'];
                const filtered = repos.filter(r => list.includes(r.name));
                setData(filtered);

            } catch (err) {
                setError(err);
            }
        };

        fetchData();
    }, [url]);

    return { data, error };
};