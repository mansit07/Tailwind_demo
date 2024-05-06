
import Image from "next/image";
import { useEffect, useState } from "react";
import Link from "next/link";
import Button from "./button";

const Logo = () => {
  //update the size of the logo when the size of the screen changes
  const [width, setWidth] = useState(0);

  const updateWidth = () => {
    const newWidth = window.innerWidth;
    setWidth(newWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", updateWidth);
    updateWidth();
  }, []);

  // change between the logo and the button when the user scrolls
  const [showButton, setShowButton] = useState(false);

  const changeNavButton = () => {
    if (window.scrollY >= 400 && window.innerWidth < 768) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNavButton);
  }, []);

  return (
    <>
      <Link href="/" style={{ display: showButton ? "none" : "block" }}>
        <Image
          src={'data:image/png;base64,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'}
          alt="Logo"
          width={width < 1024 ? "50" : "80"}
          height={width < 1024 ? "45" : "74"}
          className="relative"
        />
      </Link>
      <div
        style={{
          display: showButton ? "block" : "none",
        }}
      >
        <Button />
      </div>
    </>
  );
};

export default Logo;