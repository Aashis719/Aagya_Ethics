import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/home/Hero";
import BrandPromise from "@/components/home/BrandPromise";
import FeaturedProducts from "@/components/home/FeaturedProducts";
import AboutSnippet from "@/components/home/AboutSnippet";
import NewsletterSignup from "@/components/home/NewsletterSignup";

export default function HomePage() {
  return (
    <>
      <Header variant="transparent" />
      <main>
        <Hero />
        <BrandPromise />
        <FeaturedProducts />
        <AboutSnippet />
        <NewsletterSignup />
      </main>
      <Footer />
    </>
  );
}
