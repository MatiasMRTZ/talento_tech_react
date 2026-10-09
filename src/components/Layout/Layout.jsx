import Header from "../Header/Header";
import Nav from "../Nav/Nav";
import Footer from "../Footer/Footer";

function Layout({ children }) {
    return (
        <>
            <Header />
            <Nav />

            <main>
                {children}
            </main>

            <Footer />
        </>
    );
}

export default Layout;