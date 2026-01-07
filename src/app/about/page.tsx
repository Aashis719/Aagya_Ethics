import Image from "next/image";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Container from "@/components/ui/Container";
import Divider from "@/components/ui/Divider";
import FadeIn from "@/components/animations/FadeIn";

export const metadata = {
  title: "About Us | Aagya Ethics",
  description:
    "Discover the story behind Aagya Ethics - an Australian-owned brand bringing premium ethnic wear to modern women.",
};

const values = [
  {
    title: "Quality First",
    description:
      "Every piece in our collection is carefully selected for its exceptional craftsmanship and premium materials.",
  },
  {
    title: "Ethical Curation",
    description:
      "We partner with artisans and suppliers who share our commitment to ethical practices and fair trade.",
  },
  {
    title: "Modern Tradition",
    description:
      "We believe traditional artistry should evolve with contemporary sensibilities without losing its essence.",
  },
];

export default function AboutPage() {
  return (
    <>
      <Header variant="solid" />
      <main className="min-h-screen bg-[#EDE8E0] pt-24 md:pt-28">
        {/* Hero Section */}
        <section className="py-16 md:py-24 bg-[#E0D8CC] border-b border-[#A17F4A]/15">
          <Container>
            <div className="text-center max-w-3xl mx-auto">
              <FadeIn direction="up">
                <span className="text-xs tracking-[0.3em] uppercase text-[#A17F4A] font-body mb-4 block">
                  Our Story
                </span>
              </FadeIn>

              <FadeIn direction="up" delay={0.1}>
                <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl tracking-wide text-[#1A1412] mb-6">
                  About Aagya Ethics
                </h1>
              </FadeIn>

              <FadeIn direction="up" delay={0.2}>
                <p className="text-lg text-[#3D3530] font-body font-light leading-relaxed">
                  Where tradition meets elegance, and every thread tells a story 
                  of craftsmanship, heritage, and modern sophistication.
                </p>
              </FadeIn>

              <FadeIn direction="none" delay={0.3}>
                <Divider withDiamond className="max-w-xs mx-auto mt-10" />
              </FadeIn>
            </div>
          </Container>
        </section>

        {/* Main Content */}
        <section className="section-padding bg-[#EDE8E0]">
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              {/* Image */}
              <FadeIn direction="left">
                <div className="relative aspect-[4/5] bg-[#E0D8CC] overflow-hidden">
                  <Image
                    src="/images/products/about-aagya-ethics.png"
                    alt="Aagya Ethics - Premium Ethnic Wear"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  <div className="absolute inset-6 border border-[#A17F4A]/30 pointer-events-none" />
                </div>
              </FadeIn>

              {/* Content */}
              <div className="space-y-8">
                <FadeIn direction="up">
                  <h2 className="font-heading text-3xl md:text-4xl tracking-wide text-[#1A1412]">
                    Our Journey
                  </h2>
                </FadeIn>

                <FadeIn direction="up" delay={0.1}>
                  <p className="text-[#3D3530] font-body font-light leading-relaxed">
                    Aagya Ethics was born from a passion for exceptional ethnic wear 
                    and a vision to bring premium quality traditional clothing to 
                    women across Australia. Based in Melbourne, we curate each piece 
                    with meticulous attention to detail.
                  </p>
                </FadeIn>

                <FadeIn direction="up" delay={0.2}>
                  <p className="text-[#3D3530] font-body font-light leading-relaxed">
                    The name &ldquo;Aagya&rdquo; embodies our philosophy — it represents the 
                    profound respect we hold for traditional craftsmanship and the 
                    permission we give ourselves to reimagine it for the modern woman.
                  </p>
                </FadeIn>

                <FadeIn direction="up" delay={0.3}>
                  <p className="text-[#3D3530] font-body font-light leading-relaxed">
                    Every kurtha in our collection is chosen for its exceptional 
                    quality, unique design, and timeless appeal. We work directly 
                    with trusted artisans to ensure that each piece meets our 
                    exacting standards.
                  </p>
                </FadeIn>
              </div>
            </div>
          </Container>
        </section>

        {/* Values Section */}
        <section className="section-padding bg-[#722F37]">
          <Container>
            <div className="text-center mb-16">
              <FadeIn direction="up">
                <span className="text-xs tracking-[0.3em] uppercase text-[#C9A962] font-body mb-4 block">
                  What We Stand For
                </span>
              </FadeIn>
              <FadeIn direction="up" delay={0.1}>
                <h2 className="font-heading text-3xl md:text-4xl tracking-wide text-[#FFFDF9]">
                  Our Values
                </h2>
              </FadeIn>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
              {values.map((value, index) => (
                <FadeIn key={value.title} direction="up" delay={0.2 + index * 0.1}>
                  <div className="text-center">
                    <div className="flex justify-center mb-6">
                      <span className="w-3 h-3 rotate-45 bg-[#C9A962]" />
                    </div>
                    <h3 className="font-heading text-xl text-[#FFFDF9] mb-4">
                      {value.title}
                    </h3>
                    <p className="text-[#FFFDF9]/70 font-body font-light leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </Container>
        </section>

        {/* Why Choose Us */}
        <section className="section-padding bg-[#E0D8CC]">
          <Container size="narrow">
            <div className="text-center mb-12">
              <FadeIn direction="up">
                <span className="text-xs tracking-[0.3em] uppercase text-[#A17F4A] font-body mb-4 block">
                  The Aagya Difference
                </span>
              </FadeIn>
              <FadeIn direction="up" delay={0.1}>
                <h2 className="font-heading text-3xl md:text-4xl tracking-wide text-[#1A1412]">
                  Why Choose Us
                </h2>
              </FadeIn>
            </div>

            <div className="space-y-8">
              <FadeIn direction="up" delay={0.2}>
                <div className="p-8 bg-[#EDE8E0] border border-[#A17F4A]/20">
                  <h3 className="font-heading text-xl text-[#1A1412] mb-3">
                    Curated Excellence
                  </h3>
                  <p className="text-[#3D3530] font-body font-light">
                    Unlike mass-market retailers, we handpick every piece. Our 
                    collection is limited, ensuring you receive something truly special.
                  </p>
                </div>
              </FadeIn>

              <FadeIn direction="up" delay={0.3}>
                <div className="p-8 bg-[#EDE8E0] border border-[#A17F4A]/20">
                  <h3 className="font-heading text-xl text-[#1A1412] mb-3">
                    Australian Service
                  </h3>
                  <p className="text-[#3D3530] font-body font-light">
                    Based in Melbourne, we understand Australian preferences and 
                    provide local customer service with Australia-wide shipping.
                  </p>
                </div>
              </FadeIn>

              <FadeIn direction="up" delay={0.4}>
                <div className="p-8 bg-[#EDE8E0] border border-[#A17F4A]/20">
                  <h3 className="font-heading text-xl text-[#1A1412] mb-3">
                    Quality Guarantee
                  </h3>
                  <p className="text-[#3D3530] font-body font-light">
                    We stand behind every piece we sell. If you&apos;re not completely 
                    satisfied, we&apos;ll make it right.
                  </p>
                </div>
              </FadeIn>
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}
