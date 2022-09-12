import type { NextPage } from "next";
import Card from "../components/Card";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Home: NextPage = () => {
  const cardsContent = [
    {
      title: "Artists",
      text: "View artist profiles",
      href: "",
    },
    {
      title: "Profile",
      text: "view your profile",
      href: "",
    },
    {
      title: "Learn",
      text: "Learn about Next.js in an interactive course with quizzes!",
      href: "",
    },
    {
      title: "Documentation",
      text: "Find in-depth information about Next.js features and its API.",
      href: "",
    },
  ];

  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <Header />

      <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center bg-slate-300">
        <h1 className="text-6xl font-bold">
          <a className="text-blue-600" href="https://nextjs.org">
            Y<span className="text-sm">(e)</span>ARN
          </a>
        </h1>
        <div className="text-xl mt-2 font-title">knit someone a sweater.. or some socks!</div>

        {/* CARDS */}
        <div className="mt-6 flex max-w-4xl flex-wrap items-center justify-around sm:w-full">
          {cardsContent.map((content) => (
            <Card
              title={content.title}
              text={content.text}
              href={content.href}
            />
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Home;
