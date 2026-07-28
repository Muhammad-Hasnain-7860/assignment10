import { useContext } from "react"
import { MyStore } from "../context/MyWebsite"
import { Navigate } from "react-router"

const Protected = ({ children }) => {
    let { currentUser } = useContext(MyStore)
    
    
    if (!currentUser) {
       return <Navigate to={'/'} />
    }

    return children
}

export default Protected