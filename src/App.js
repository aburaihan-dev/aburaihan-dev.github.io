import React from "react";
import Header from "./components/structure/Header";
import Content from "./components/structure/Content";
import Footer from "./components/structure/Footer";
import FloatingButton from './components/elements/FloatingButton';
import Resume from "./resume.json";

const App = () => {
  React.useEffect(() => {
    document.title = [
      Resume.basics.name,
      Resume.basics.label,
      [Resume.basics.location.region, Resume.basics.location.country].join(", ")
    ].join(" | ");
  }, []);

  return (
    <>
      <Header />
      <Content />
      <Footer />
      <FloatingButton />
    </>
  );
}

export default App;
