import dynamic from "next/dynamic";
import Hero from "@/components/sections/Hero/Hero";

const Marquee = dynamic(() => import("@/components/sections/Marquee/Marquee"));
const About = dynamic(() => import("@/components/sections/About/About"));
const Destinations = dynamic(() => import("@/components/sections/Destinations/Destinations"));
const Tours = dynamic(() => import("@/components/sections/Tours/Tours"));
const PlacesToStay = dynamic(() => import("@/components/sections/PlacesToStay/PlacesToStay"));
const Wellness = dynamic(() => import("@/components/sections/Wellness/Wellness"));
const Journal = dynamic(() => import("@/components/sections/Journal/Journal"));
const Prize = dynamic(() => import("@/components/sections/Prize/Prize"));
const SignatureExperiences = dynamic(() => import("@/components/sections/SignatureExperiences/SignatureExperiences"));
const Testimonials = dynamic(() => import("@/components/sections/Testimonials/Testimonials"));
const FAQ = dynamic(() => import("@/components/sections/FAQ/FAQ"));

export default function Home() {
  return (
    <>
      <Hero />
      <Marquee />
      <About />
      <Destinations />
      <Tours />
      <PlacesToStay />
      <Wellness />
      <Journal />
      <Prize />
      <SignatureExperiences />
      <Testimonials />
      <FAQ />
    </>
  );
}

