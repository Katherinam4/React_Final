import HeroSection from "../components/HeroSection";
import Models from "../components/Models";
const images = [
  {
    src: "Model1.webp",
    alt: "Image 1",
    model: "718",
    description:
      "Precise, not fanciful. Self-assured, not restrained. Low, wide and sleek.",
  },
  {
    src: "Model2.webp",
    alt: "Image 2",
    model: "911",
    description:
      "From every angle a traditional athletic form; every detail combines timeless design with contemporary style.",
  },
  {
    src: "Model3.webp",
    alt: "Image 3",
    model: "Taycan",
    description:
      "A car that reflects the future - and at the same time instantly reveals the soul of Porsche.",
  },
  {
    src: "Model4.webp",
    alt: "Image 4",
    model: "Panamera",
    description:
      "A performance-oriented four-door sports car with the driving pleasure of a Porsche.",
  },
  {
    src: "Model5.webp",
    alt: "Image 5",
    model: "Macan",
    description: "A compact SUV with the soul of a sports car.",
  },
  {
    src: "Model6.webp",
    alt: "Image 6",
    model: "Cayenne",
    description:
      "A powerful SUV with sports car dynamics and the flexibility for any adventure.",
  },
];
const Home = () => {
  return (
    <div>
      <HeroSection></HeroSection>
      <Models images={images}></Models>
    </div>
  );
};

export default Home;
