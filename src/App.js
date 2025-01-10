import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import Profile from "./pages/Profile";
import BlogCategory from "./sections/BlogCategory";
import BrowseCategory from "./sections/BrowseCategory";
import FeaturedProduct from "./sections/FeaturedProduct";
import Features from "./sections/Features";
import Footer from "./sections/Footer";
import Header from "./sections/Header";
import Hero from "./sections/Hero";
import Nav from "./sections/Nav";
import NewArrivals from "./sections/NewArrivals";
import PopularBrands from "./sections/PopularBrands";
import QuickSales from "./sections/QuickSales";
import WearCategories from "./sections/WearCategories";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
        <main className="">
          <section className="bg-black text-white">
            <Header />
          </section>

          <section>
            <Nav />
          </section>

        <Routes>
          <Route path="/" element={
            <>
              <section>
                <Hero />
              </section>

              <section>
                <Features />
              </section>

              <section className="mb-10">
                <WearCategories />
              </section>

              <section className="mb-10">
                <article className="flex items-center justify-center">
                  <hr className="w-[30%]" />
                  <h1 className="text-center text-xl font-bold w-[30%]">FEATURED PRODUCTS</h1>
                  <hr className="w-[30%]"/>
                </article>        
                <FeaturedProduct />
              </section>

              <section className="mb-10">
                <article className="flex items-center justify-center">
                  <hr className="w-[30%]" />
                  <h1 className="text-center text-xl font-bold w-[30%]">NEW ARRIVALS</h1>
                  <hr className="w-[30%]"/>
                </article>
                <NewArrivals />
              </section>

              <section className="mb-10">
                <QuickSales />
              </section>

            
              <section>
                <article className="flex items-center justify-center mb-5">
                  <hr className="w-[30%]" />
                  <h1 className="text-center text-xl font-bold w-[30%]">BROWSE CATEGORY</h1>
                  <hr className="w-[30%]"/>
                </article>
                <BrowseCategory />
              </section>

              <section className="mt-14">
                <h1 className="text-center text-xl font-bold mb-5">LATEST NEWS</h1>
                <BlogCategory />
              </section>

              <section className="mt-14">
                <PopularBrands />
              </section>
            </>
        }/>

        <Route path="/profile" element={
            <>
              <Profile />
            </>
        }/> 

        <Route path="/aboutus" element={
          <>
            <AboutUs />
          </>
        }/>

        <Route path="/contactus" element={
          <>
            <ContactUs />
          </>
        }/>
      </Routes>
        <footer className="mt-14">
          <Footer />
        </footer>
      </main>
    </Router>      
  );
};
export default App;
