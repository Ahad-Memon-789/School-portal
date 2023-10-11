import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import Loader from '../../component/img/3d8064758e54ec662e076b6ca54aa90e (1).gif'
import { fbAuth } from "../../config/firebasemethod"

export default function ProtectedScreen(props: any) {
    const { Screen } = props
    const [loader, setloader] = useState<any>()

    const navigate = useNavigate()
    let cheakAuth = () => {
        setloader(true)

        fbAuth()
            .then((res) => {
                setloader(false)
            })
            .catch((err) => {
                setloader(false)
                navigate(`/login`)
            })
    }
    useEffect(() => {
        cheakAuth()
    }, [])

    return loader ? (<>
        <h2 className="bg-[rgba(255,255,255,.2)] w-screen flex justify-center items-center"><img src={Loader} alt="" /></h2>
    </>) : (<>
        <Screen />
    </>)
}