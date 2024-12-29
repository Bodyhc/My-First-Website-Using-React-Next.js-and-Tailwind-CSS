import Nav from "./componets/Header";
import HomeComponent from "./componets/home";
import SectionHome from "./componets/section";
import JumpsSection from "./componets/jumps";
import Feature from "./componets/feature";
import Content from "./componets/content";
import Blog from "./componets/blog";
import Step from "./componets/steps";
import Footer from "./componets/footer";

export default function Home() {
  return (
    <>
      <Nav />
      <HomeComponent />
      <SectionHome />
      <JumpsSection />
      <Feature />
      <Blog />
      <Content />
      <Step />
      <Footer />
    </>
  );
}
