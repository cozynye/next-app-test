import Navbar from "./NavBar";
import Seo from "../components/Seo";

export default function Layout({ children }) {
    return (
        <>
            <Seo title={children.type?.name || ''} />
            <Navbar />
            <div>{children}</div>
        </>
    )
}