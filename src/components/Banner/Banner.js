import Image from "next/image";
import React from "react";

function Banner() {
  return (
    <div style={{ width: "100%", height: "100vh", position: "relative" }}>
      <Image
        src="https://wallpapers-hub.art/wallpaper-images/6324.jpg"
        alt=""
        layout="fill"
        objectFit="cover"
        objectPosition="bottom"
      />
    </div>
  );
}

export default Banner;
