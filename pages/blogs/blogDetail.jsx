import Header from "../../components/Menu/Header";
import Footer from "../../components/Menu/Footer";
import TopBar from "../../components/Menu/TopBar";
import BlogDetail from "../../components/InnerPages/Blogs/BlogDetail";

export default function blogDetail() {
    return (
        <>
            <TopBar />
            <Header /> 
            <BlogDetail />
            <Footer /> 
        </>
    );
}
