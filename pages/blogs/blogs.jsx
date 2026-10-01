import Header from "../../components/Menu/Header";
import Footer from "../../components/Menu/Footer";
import TopBar from "../../components/Menu/TopBar";
import Blogs from "../../components/InnerPages/Blogs/Blogs";

export default function blogs() {
    return (
        <>
            <TopBar />
            <Header /> 
            <Blogs />
            <Footer /> 
        </>
    );
}
