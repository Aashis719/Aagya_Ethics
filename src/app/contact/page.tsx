"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Mail, MapPin, Clock, Send, Check, Loader2 } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Container from "@/components/ui/Container";
import Divider from "@/components/ui/Divider";
import Input from "@/components/ui/Input";
import Textarea from "@/components/ui/Textarea";
import Button from "@/components/ui/Button";
import FadeIn from "@/components/animations/FadeIn";
import { LineReveal } from "@/components/animations/TextReveal";

const contactSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Valid email is required"),
  phone: z.string().optional(),
  subject: z.string().min(2, "Subject is required"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactForm = z.infer<typeof contactSchema>;

const contactInfo = [
  {
    icon: Mail,
    title: "Email Us",
    details: "hello@aagyaethics.com.au",
    description: "We typically respond within 24 hours",
  },
  {
    icon: MapPin,
    title: "Location",
    details: "Rockdale, Sydney",
    description: "Australia",
  },
  {
    icon: Clock,
    title: "Business Hours",
    details: "Mon - Fri: 9am - 5pm AEST",
    description: "Online orders accepted 24/7",
  },
];

export default function ContactPage() {
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactForm>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactForm) => {
    setStatus("loading");
    
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));
    
    console.log("Contact form submitted:", data);
    
    setStatus("success");
    reset();
  };

  return (
    <>
      <Header variant="solid" />
      <main className="min-h-screen bg-cream pt-24 md:pt-28">
        {/* Hero Section */}
        <section className="py-16 md:py-24 bg-pearl border-b border-gold-light/20">
          <Container>
            <div className="text-center max-w-3xl mx-auto">
              <FadeIn direction="up">
                <span className="text-xs tracking-[0.3em] uppercase text-gold font-body mb-4 block">
                  Get In Touch
                </span>
              </FadeIn>

              <LineReveal as="h1" delay={0.1}>
                <span className="font-heading text-4xl md:text-5xl lg:text-6xl tracking-wide text-text-primary">
                  Contact Us
                </span>
              </LineReveal>

              <FadeIn direction="up" delay={0.2}>
                <p className="mt-8 text-lg text-text-secondary font-body font-light leading-relaxed">
                  Have a question about our products or need assistance? 
                  We&apos;d love to hear from you.
                </p>
              </FadeIn>

              <FadeIn direction="none" delay={0.3}>
                <Divider withDiamond className="max-w-xs mx-auto mt-10" />
              </FadeIn>
            </div>
          </Container>
        </section>

        {/* Contact Info Cards */}
        <section className="py-16 bg-cream">
          <Container>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
              {contactInfo.map((info, index) => (
                <FadeIn key={info.title} direction="up" delay={index * 0.1}>
                  <div className="p-8 bg-pearl border border-gold-light/30 text-center h-full">
                    <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center bg-maroon/10 rounded-full">
                      <info.icon className="w-5 h-5 text-gold" />
                    </div>
                    <h3 className="font-heading text-lg text-text-primary mb-2">
                      {info.title}
                    </h3>
                    <p className="text-text-primary font-body font-normal mb-1">
                      {info.details}
                    </p>
                    <p className="text-sm text-text-muted font-body font-light">
                      {info.description}
                    </p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </Container>
        </section>

        {/* Contact Form Section */}
        <section className="section-padding bg-pearl">
          <Container size="narrow">
            <div className="text-center mb-12">
              <FadeIn direction="up">
                <span className="text-xs tracking-[0.3em] uppercase text-gold font-body mb-4 block">
                  Send a Message
                </span>
              </FadeIn>
              <LineReveal as="h2" delay={0.1}>
                <span className="font-heading text-2xl md:text-3xl tracking-wide text-text-primary">
                  We&apos;d Love to Hear From You
                </span>
              </LineReveal>
            </div>

            <FadeIn direction="up" delay={0.2}>
              <div className="bg-cream p-8 md:p-12 border border-gold-light/30">
                {status === "success" ? (
                  <div className="text-center py-12">
                    <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-green-100 flex items-center justify-center">
                      <Check className="w-10 h-10 text-green-600" />
                    </div>
                    <h3 className="font-heading text-2xl text-text-primary mb-4">
                      Message Sent!
                    </h3>
                    <p className="text-text-secondary font-body font-light mb-8">
                      Thank you for reaching out. We&apos;ll get back to you within 24-48 hours.
                    </p>
                    <Button
                      variant="primary"
                      onClick={() => setStatus("idle")}
                    >
                      Send Another Message
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <Input
                        label="Full Name"
                        id="name"
                        {...register("name")}
                        error={errors.name?.message}
                        placeholder="Your full name"
                      />
                      <Input
                        label="Email Address"
                        id="email"
                        type="email"
                        {...register("email")}
                        error={errors.email?.message}
                        placeholder="your@email.com"
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <Input
                        label="Phone (Optional)"
                        id="phone"
                        type="tel"
                        {...register("phone")}
                        placeholder="+61 xxx xxx xxx"
                      />
                      <Input
                        label="Subject"
                        id="subject"
                        {...register("subject")}
                        error={errors.subject?.message}
                        placeholder="How can we help?"
                      />
                    </div>

                    <Textarea
                      label="Your Message"
                      id="message"
                      {...register("message")}
                      error={errors.message?.message}
                      placeholder="Tell us more about your inquiry..."
                      rows={6}
                    />

                    <div className="pt-4">
                      <Button
                        type="submit"
                        variant="filled"
                        size="lg"
                        className="w-full md:w-auto"
                        disabled={status === "loading"}
                      >
                        {status === "loading" ? (
                          <>
                            <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                            Sending...
                          </>
                        ) : (
                          <>
                            <Send className="w-4 h-4 mr-2" />
                            Send Message
                          </>
                        )}
                      </Button>
                    </div>
                  </form>
                )}
              </div>
            </FadeIn>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}

