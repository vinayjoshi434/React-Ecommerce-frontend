import { useState, useEffect } from "react"
import axios from "axios"

const usecategoryinfo = () => {
    const [categorydata, setcategorydata] = useState([])

    useEffect(() => {
        const fetchcategory = async () => {
            try {

                const res = await axios.get("https://dummyjson.com/products/categories")


                setcategorydata(res.data)

            } catch (error) {
                console.log("error occured in fetching the data");

            }
        }
        fetchcategory()

    }, [])

    console.log(categorydata);

    return categorydata
}
export default usecategoryinfo