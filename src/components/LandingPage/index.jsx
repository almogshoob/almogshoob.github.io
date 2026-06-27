import { Card, Footer } from "../../components";

const projects = [
  {
    title: "Bridges",
    subtitle: "Are you familiar with the best game in the TS?",
    url: "https://almogshoob.github.io/bridges/",
    favicon: "https://almogshoob.github.io/bridges/logo.svg",
  },
  {
    title: "Color Guesser",
    subtitle: "Let's dive in to the beautiful world of HSL",
    url: "https://almogshoob.github.io/color-guesser/",
    favicon: "https://almogshoob.github.io/color-guesser/color-wheel.svg",
  },
  {
    title: "Pi 100",
    subtitle: "How good is your memorization?",
    url: "https://almogshoob.github.io/pi100/",
    favicon: "https://almogshoob.github.io/pi100/pi-icon-light.svg",
  },
  {
    title: "Recepies",
    subtitle: "Yummy 😋",
    url: "https://almogshoob.github.io/recipes/",
    favicon: "https://almogshoob.github.io/recipes/cookie-logo.svg",
  },
];

export const LandingPage = () => {
  return (
    <main className="landing">
      <h1 className="title">My Projects</h1>

      <div className="cards">
        {projects.map((project) => (
          <Card key={project.url} {...project} />
        ))}
      </div>

      <Footer />
    </main>
  );
};
