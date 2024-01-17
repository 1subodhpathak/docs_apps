import React, { useRef } from "react";
import Card from "./Card";

function Forground() {
  const ref = useRef(null);
  const data = [
    {
      desc: "This is the first docoment of this Docs app that I have made",
      filesize: "0.9mb",
      close: true,
      tag: { isOpen: true, tagTitle: "Download Now", tagColor: "green" },
    },
    {
      desc: "The app is fully made from React a library of JavaScript.",
      filesize: "1.4mb",
      close: true,
      tag: { isOpen: true, tagTitle: "Download Now", tagColor: "blue" },
    },
    {
      desc: "If you want to add anything to this app you need to wait for some time. I am going to add a button that will let you add your document to this App and I ma making it User friendly.",
      filesize: "2mb",
      close: false,
      tag: { isOpen: false, tagTitle: "Download Now", tagColor: "green" },
    },
  ];
  return (
    <div
      ref={ref}
      className="fixed top-0 left-0 z-[3] w-full h-full flex gap-10 flex-wrap p-5"
    >
      {data.map((item, index) => (
        <Card data={item} reference={ref} />
      ))}
    </div>
  );
}

export default Forground;
