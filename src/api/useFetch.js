import { useEffect, useState } from "react"


const useFetch = (url)=>{
    const [data,setData] = useState()
    useEffect(()=>{
        fetch(url).then((response)=>{
            response.json().then((items)=>{
                setData(items.products)
            })
        }).catch((error)=>{
            console.log(error);
        })
    },[])

    return data
}

export default useFetch