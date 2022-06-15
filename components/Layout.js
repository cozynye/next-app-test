import Navbar from "./NavBar";
import Seo from "../components/Seo";

export default function Layout({children}){
    console.log('children')
    console.log(children.type.name)
    return(
        <>
        <Seo title={children.type.name} />
            <Navbar/>
            <div>{children}</div>
        </>
    )
}