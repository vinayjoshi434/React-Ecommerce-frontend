import { useState, useEffect } from "react"
import axios from "axios"

const useproductInfo = (category) => {



    const [Allproductdata, setAllproductdata] = useState({ products: [] })


    const url = category ? `https://dummyjson.com/products/category/${category}` : `https://dummyjson.com/products`



    useEffect(() => {
        const fetchcategory = async () => {
            try {
                const res = await axios.get(url)

                setAllproductdata(res.data)

            } catch (error) {
                console.log("error occured in fetching the data");

            }
        }
        fetchcategory()

    }, [category])

    console.log(Allproductdata);

    return Allproductdata
}
export default useproductInfo