import {useState, useEffect} from "react"

export const useFetch = (url) =>{
    const [data, setData] = useState(null);

    useEffect(()=>{
        
        const fetchData = async ()=>{
            try {
                const res = await fetch(url)
                const data = await res.json()

                const repos = data.map((repo)=>({
                    id: repo.id,
                    name: repo.name,
                    language: repo.language,
                    repoLink: repo.html_url,
                    about: repo.description,
                    repoPage: repo.homepage,

                }))

                setData(repos)

            } catch (error) {
                console.log("Isso aqui não era pra acontecer")
            };
        };

        fetchData()

    }, [url]);

    return {data}
};