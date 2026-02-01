import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import Divider from "@/components/ui/Divider";

export default function NotFound() {
  return (
    <>
      <Header variant="solid" />
      <main className="min-h-screen bg-cream pt-24 md:pt-28 flex items-center">
        <Container>
          <div className="text-center max-w-xl mx-auto py-20">
            {/* 404 Display */}
            <div className="mb-8">
              <span className="font-heading text-8xl md:text-9xl text-gold/80">
                404
              </span>
            </div>

            <h1 className="font-heading text-3xl md:text-4xl tracking-wide text-text-primary mb-4">
              Page Not Found 
            </h1>

            <p className="text-text-secondary font-body font-light mb-8">
            The page you&apos;re looking for doesn&apos;t exist  
            Let&apos;s get you back on track.
            </p>

            <Divider withDiamond className="max-w-xs mx-auto mb-8" />

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/">
                <Button variant="primary" size="md" className="cursor-pointer">
                  Return Home
                </Button>
              </Link>
              <Link href="/shop" >
                <Button variant="secondary" size="md" className="cursor-pointer">
                  Browse Shop
                </Button>
              </Link>
            </div>
          </div>
        </Container>
      </main>
      <Footer />
    </>
  );
}

