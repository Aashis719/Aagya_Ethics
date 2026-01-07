import { notFound } from "next/navigation";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Container from "@/components/ui/Container";
import Divider from "@/components/ui/Divider";
import ImageGallery from "@/components/product/ImageGallery";
import ProductInfo from "@/components/product/ProductInfo";
import ProductCard from "@/components/shop/ProductCard";
import FadeIn from "@/components/animations/FadeIn";
import { LineReveal } from "@/components/animations/TextReveal";
import productsData from "@/data/products.json";
import type { Product } from "@/data/types";

interface ProductPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return (productsData.products as Product[]).map((product) => ({
    slug: product.slug,
  }));
}

export async function generateMetadata({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = (productsData.products as Product[]).find(
    (p) => p.slug === slug
  );

  if (!product) {
    return {
      title: "Product Not Found | Aagya Ethics",
    };
  }

  return {
    title: `${product.name} | Aagya Ethics`,
    description: product.description,
    openGraph: {
      title: product.name,
      description: product.description,
      images: product.images[0] ? [product.images[0]] : [],
    },
  };
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = (productsData.products as Product[]).find(
    (p) => p.slug === slug
  );

  if (!product) {
    notFound();
  }

  // Get related products (same category, excluding current)
  const relatedProducts = (productsData.products as Product[])
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 3);

  return (
    <>
      <Header variant="solid" />
      <main className="min-h-screen bg-[#EDE8E0] pt-24 md:pt-28">
        {/* Breadcrumb */}
        <Container className="py-4">
          <Link
            href="/shop"
            className="inline-flex items-center gap-2 text-sm text-[#5A524C] hover:text-[#A17F4A] transition-colors font-body"
          >
            <ChevronLeft size={16} />
            Back to Shop
          </Link>
        </Container>

        {/* Product Section */}
        <section className="pb-16 md:pb-24">
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-start">
              {/* Image Gallery - Sticky on desktop */}
              <FadeIn direction="left" className="lg:sticky lg:top-32">
                <ImageGallery
                  images={product.images}
                  productName={product.name}
                />
              </FadeIn>

              {/* Product Info */}
              <div className="lg:py-4">
                <ProductInfo product={product} />
              </div>
            </div>
          </Container>
        </section>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <section className="section-padding bg-[#E0D8CC] border-t border-[#A17F4A]/15">
            <Container>
              <div className="text-center mb-12">
                <FadeIn direction="up">
                  <span className="text-xs tracking-[0.3em] uppercase text-[#A17F4A] font-body mb-4 block">
                    You May Also Like
                  </span>
                </FadeIn>
                <LineReveal as="h2" delay={0.1}>
                  <span className="font-heading text-2xl md:text-3xl tracking-wide text-[#1A1412]">
                    Related Products
                  </span>
                </LineReveal>
                <FadeIn direction="none" delay={0.2}>
                  <Divider withDiamond className="max-w-xs mx-auto mt-6" />
                </FadeIn>
              </div>

              <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
                {relatedProducts.map((relatedProduct, index) => (
                  <ProductCard
                    key={relatedProduct.id}
                    product={relatedProduct}
                    index={index}
                  />
                ))}
              </div>
            </Container>
          </section>
        )}
      </main>
      <Footer />
    </>
  );
}
