import Header from "./sections/Header.jsx";
import Main from "./sections/Main.jsx";
import Info from "./sections/Info.jsx";
import Resources from "./sections/Resources.jsx";
import Footer from "./sections/Footer.jsx";

export default function Home() {
  return (
    <div className="w-full">
      <Header />
      <Main />
      <Info />
      <Resources />
      <Footer />
    </div>
  );
}
