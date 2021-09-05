export type FacadeThumbQuality = "maxresdefault" | "hqdefault" | "sddefault" | "mqdefault" | "default";

export interface YoutubeEmbedProps {
  videoId: string;
  facadeQuality?: FacadeThumbQuality;
  alt?: string;
}

// export const FacadeThumbRes = {
//   maxresdefault: {
//     width: 1280,
//     height: 720,
//   },
//   sddefault: {
//     width: 640,
//     height: 480,
//   },
//   hqdefault: {
//     width: 480,
//     height: 360,
//   },
//   mqdefault: {
//     width: 320,
//     height: 180,
//   },
//   default: {
//     width: 120,
//     height: 90,
//   },
// };
