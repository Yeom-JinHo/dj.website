"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { ArtistProfile } from "@/types/artist";

const ArtistImage = ({
  artist,
  backgroundLogo,
}: {
  artist: ArtistProfile;
  backgroundLogo: boolean;
}) => {
  return (
    <motion.div
      layoutId={`profile-image-${artist.name}`}
      className="group relative h-full w-full overflow-hidden object-cover"
    >
      {/* 기본 이미지 */}
      <Image
        src={artist.image}
        width={1280}
        height={600}
        alt={`Image of ${artist.name}`}
        className={`h-full w-full object-cover object-center transition-all duration-300 ${backgroundLogo ? "group-hover:scale-110 group-hover:opacity-30" : "rounded-lg"}`}
        priority
        sizes="(max-width: 768px) 400px, 520px"
        placeholder="blur"
        blurDataURL={artist.imagePlaceholder}
      />
      {backgroundLogo && (
        <div className="absolute inset-0 flex scale-95 items-center justify-center opacity-0 transition-all duration-150 ease-out group-hover:scale-100 group-hover:opacity-100">
          <Image
            src={artist.logoImage}
            width={320}
            height={150}
            sizes="(max-width: 768px) 320px, 150px"
            alt={`Hover image of ${artist.name}`}
            className="h-auto w-full object-contain brightness-75"
            priority
          />
        </div>
      )}
    </motion.div>
  );
};

export default ArtistImage;
