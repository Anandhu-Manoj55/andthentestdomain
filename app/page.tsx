import {
  Hero,
  Marquee,
  About,
  Destinations,
  Tours,
  PlacesToStay,
  Wellness,
  Journal,
  Prize,
  SignatureExperiences,
  Testimonials,
  FAQ,
} from "@/components/sections";

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

