import React, { FC, useCallback, useMemo, useState } from "react";
import Image from "next/image";
import { YoutubeEmbedProps, FacadeThumbQuality } from "./YoutubeEmbed.d";
import s from "./YoutubeEmbed.module.css";
import cn from "classnames";

const getYoutubeThumbnailUrl = (id: string, quality: FacadeThumbQuality) => {
  return `https://img.youtube.com/vi/${id}/${quality}.jpg`;
};

const YoutubeEmbed: FC<YoutubeEmbedProps> = ({ videoId, facadeQuality = "maxresdefault", alt }) => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = useCallback(() => {
    setIsClicked(true);
  }, []);

  const facadeThumbUrl = useMemo(() => {
    return getYoutubeThumbnailUrl(videoId, facadeQuality);
  }, [videoId, facadeQuality]);

  return (
    <div className={s.wrapper}>
      {!isClicked ? (
        <button className={cn("group", s.content)} aria-label="Play" onClick={handleClick}>
          <Image layout="fill" objectFit="cover" src={facadeThumbUrl} alt={alt || "Embedded youtube"} />

          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <svg version="1.1" viewBox="0 0 68 48" width="68px" height="48px" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M66.52,7.74c-0.78-2.93-2.49-5.41-5.42-6.19C55.79,.13,34,0,34,0S12.21,.13,6.9,1.55 C3.97,2.33,2.27,4.81,1.48,7.74C0.06,13.05,0,24,0,24s0.06,10.95,1.48,16.26c0.78,2.93,2.49,5.41,5.42,6.19 C12.21,47.87,34,48,34,48s21.79-0.13,27.1-1.55c2.93-0.78,4.64-3.26,5.42-6.19C67.94,34.95,68,24,68,24S67.94,13.05,66.52,7.74z"
                fill="currentColor"
                className="opacity-50 group-hover:opacity-100 transition-colors group-hover:text-[#f00]"
              ></path>
              <path d="M 45,24 27,14 27,34" fill="#fff"></path>
            </svg>
          </div>
        </button>
      ) : (
        <iframe
          className={s.content}
          loading="lazy"
          width="100%"
          height="100%"
          src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1`}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="Embedded youtube"
        />
      )}
    </div>
  );
};

export default YoutubeEmbed;
