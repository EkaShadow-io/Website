import Navbar from "./navBar";
import Footer from "../footer";
import FirstComponent from "./1stComponent";
import "../../../app/styles/homePage/navBar.css";
import Form from "./dataForm";
import SecondComponent from "./2ndComponent";

function Home() {
    return (
        <div>
            <>
                <Navbar />
                <FirstComponent />
                <Form />
                <SecondComponent />
                <Footer />
                {/* <Component {...pageProps} /> */}
            </>
        </div>

    );
}

export default Home;