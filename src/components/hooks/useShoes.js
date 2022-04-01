import { useEffect, useState } from "react"

const useShoes = () =>{
    const [shoes, setShoes] = useState([]);

    useEffect(() =>{

        fetch('products.json')
        .then(res => res.json())
        .then(data => setShoes(data));
    }, []);
    return [shoes, setShoes];
}

export default useShoes;