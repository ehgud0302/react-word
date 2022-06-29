import React, { useEffect, useState } from 'react'


export default function useFetch(url) {
    const [data, setData] = useState([]);

    function CallAPI() {
        fetch(url).then(res => {                 /// API 비동기 통신을 위해서 fetch 사용
            return res.json()
        })
            .then(data => {
                setData(data);
            })
    }

    useEffect(() => {
        CallAPI()
    }, [url])

    return data;

}
