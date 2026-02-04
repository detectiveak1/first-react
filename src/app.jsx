import Navbar from "./components/navbar"
import Main from "./components/main"
import { createRoot } from "react-dom/client"
const root = createRoot(document.getElementById("root"))
export default function app(){
    return(
    <>
        <Navbar />
        <Main />
    </>
    )
}