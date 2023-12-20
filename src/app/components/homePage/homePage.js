import Navbar from "./navBar";
import Footer from "../footer";
import FirstComponent from "./1stComponent";
import "../../../app/styles/homePage/navBar.css";
import Form from "./dataForm";
import SecondComponent from "./2ndComponent";
import ThirdComponent from "./3rdComponent";

function Home() {
    return (
        <div>
            <>
                <Navbar />
                <FirstComponent />
                {/* <Form /> */}
                <SecondComponent />
                <ThirdComponent/>
                <Footer />
                {/* <Component {...pageProps} /> */}
            </>
        </div>

    );
}

export default Home;