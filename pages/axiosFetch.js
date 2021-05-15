import { useState , useEffect} from 'react';


const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [isPending, setISPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect( () => {
        const abortCont = new AbortController();

        fetch(url, {signal: abortCont.signal})
            .then(res => {
                console.log(res);
                if(!res.ok){
                    throw Error('Sorry coud not fetch data !! Please try again later....');
                }
                return res.json();
            })
            .then(data => {
                setData(data);
                setISPending(false);
                setError(null);
            })
            .catch(err => {
                if (err.name === 'AbortError'){
                    console.log('fetch Aborted');
              }else{
                    console.log(err.message)
                    setError(err.message);
                    setISPending(null);
                }
            });

        return () => abortCont.abort();
    }, [url]);

    return { data, isPending, error};
}

export default useFetch;