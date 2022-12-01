//Import React Library
import { Helmet } from "react-helmet-async";

// Import CSS
// Import JS

// Import Components
import Header from "../components/header";
import Footer from "../components/footer";
import {MainTitle} from "../utils/variables"

export default function Index() {
  return (
    <>
      <Helmet>
        <title>{MainTitle} - Home</title>
      </Helmet>
      <Header />
index
      <Footer />
    </>
  );
}
