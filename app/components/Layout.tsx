import Header from "./Header/Header";

interface Props {
  children: React.ReactNode;
}

export default function Layout({ children }: Props) {
  return (
    <>
      {/* MAIN LAYOUT */}
      <Header />
      <main className="flex min-h-screen flex-col items-center justify-center bg-bgcolor">
        {children}
      </main>
    </>
  );
}
