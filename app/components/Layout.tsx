interface Props {
  children: React.ReactNode;
}

export default function Layout({ children }: Props) {
  return (
    <>
      {/* MAIN LAYOUT */}
      <div className="">
        <main className="flex-1 overflow-y-auto">{children}</main>
      </div>
    </>
  );
}
