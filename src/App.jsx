import "../src/style/index.css";
import Banner from "./component/banniere";
import { Footer } from "./component/footer";
import { Header } from "./component/header";

function App() {
  return (
    <>
      <div className="header">
        <Header />
        <Banner />
      </div>
      <div className="footer">
        <Footer />
      </div>
    </>
  );
}

export default App;
