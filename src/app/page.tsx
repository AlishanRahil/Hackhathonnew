import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import FoodCategory from "./components/Foodcatogry";
import Whychooseus from "./components/Whychooseus";
import Clients from "./components/Clients";
import Testimonial from "./components/Tesmonial";
import Chef from "./components/Chef";
import Any from "./components/Any";
import Blogs from "./components/Blogs";
import Support from "./components/Support";
import Ourmenu from "./components/Ourmenu";


export default function Home() {
  return (
    <>
     <Navbar/>
     <Hero/>
     <About/>
     <FoodCategory/>
     <Whychooseus/>
     <Clients/>
     <Ourmenu/>
     <Chef/>
  <Testimonial/>

  <Any/>
  <Blogs/>
  <Support/>
  

    </>
  );
}
