import Header from 'components/Header';
import Aside from 'components/Aside';
import Footer from 'components/Footer';

const Layout = (props : {
    children : React.ReactNode
}) => {
    return(
        <>
            <Header />
            <Aside />
            <main>
                {props.children}
            </main>
            <Footer />
        </>
    );
}

export default Layout;