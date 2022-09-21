import Header from "./Header/Header";
import Nav2 from "./Header/nav2";
interface Props {
  children: React.ReactNode;
}

export default function Layout({ children }: Props) {
  return (
    <>
      {/* MAIN LAYOUT */}
      <Header />
      <main className="min-h-screen flex flex-col items-center justify-center bg-bgcolor ">
        {children}
      </main>
    </>
  );
}
