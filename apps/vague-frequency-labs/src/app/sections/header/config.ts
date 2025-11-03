import type { Link } from "@/types/link";

// This is a setting for the compact header
const linkLimit = 5;
//

const links: Link[] = [
  {
    title: "About",
    href: "/about",
  },
  {
    title: "Artist",
    href: "/artist",
  },
  {
    title: "Music",
    href: "/music",
  },
  {
    title: "Video",
    href: "/video",
  },
  {
    title: "Contact",
    href: "/contact",
  },
];

export { linkLimit, links };
