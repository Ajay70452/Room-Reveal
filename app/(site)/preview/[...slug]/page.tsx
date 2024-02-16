import { useRouter } from "next/router"

const page = ({params} : {
    params : {
        slug : string
    }
}) => {
    console.log(params)
    return <p>Post: {params.slug}</p>
}

export default page