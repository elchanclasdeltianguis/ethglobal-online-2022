import Header from "./Header/Header";
import Nav2 from "./Nav/nav2";
interface Props {
  children: React.ReactNode;
}

export default function Layout({ children }: Props) {
  return (
    <>
      {/* MAIN LAYOUT */}
      {/* <Header /> */}
      <Nav2 />
      <main className="flex min-h-screen flex-col items-center justify-center bg-bgcolor ">
        {children}
      </main>
    </>
  );
}
