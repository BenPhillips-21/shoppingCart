import { useParams } from "react-router"

function Product() {
    let {id} = useParams()
    
    return (
        <>
            <h1>{id}</h1>
        </>
    )
}

export default Product