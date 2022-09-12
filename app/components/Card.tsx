import React from "react";

interface Props {
  title: string;
  text: string;
  href: string;
}

function Card({ title, text, href }: Props) {
  return (
    <div
      key={title + text}
      className="mt-6 w-96 rounded-xl border p-6 text-left hover:text-blue-600 focus:text-blue-600 
              bg-zinc-200 text-sky-900"
    >
      <a href={href}>
        <h3 className="text-2xl font-bold">{title} &rarr;</h3>
        <p className="mt-4 text-xl">{text}</p>
      </a>
    </div>
  );
}

export default Card;
