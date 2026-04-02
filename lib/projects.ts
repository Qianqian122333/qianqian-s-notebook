export type Project = {
  id: number;
  slug: string;
  title: string;
  categories: string[];
  description: string;
  tags: string[];
  techIcons?: { icon: string; label: string }[];
  featured: boolean;
  image: string;
};

export const projects: Project[] = [
  {
    id: 1,
    slug: "kaleido-colorlab",
    title: "Kaleido ColorLab",
    categories: [
      "UX Design",
      "Full-Stack Development",
      "Front-end Development",
    ],
    description:
      "A color tool that bridges the gap between inspiration and purchase.",
    tags: ["User Research", "Stakeholder Management", "Usability Test"],
    techIcons: [
      { icon: "/figma.svg", label: "Figma" },
      { icon: "/html.svg", label: "HTML" },
      { icon: "/css.svg", label: "CSS" },
      { icon: "/tailwindcss.svg", label: "Tailwind" },
      { icon: "/javascript.svg", label: "JS" },
      { icon: "/typescript.svg", label: "TS" },
      { icon: "/nextjs.png", label: "Next.js" },
      { icon: "/sql.svg", label: "SQL" },
    ],
    featured: true,
    image: "/project/colorlab.webp",
  },
  {
    id: 2,
    slug: "aventus-airbrushes",
    title: "Aventus AirBrushes",
    categories: ["UX Design", "Front-end Development"],
    description:
      "E-commerce experience design and development for Aventus Airbrush, focusing on the product page and customized purchase page.",
    tags: ["E-commerce", "User Research", "Competitive Analysis"],
    techIcons: [
      { icon: "/figma.svg", label: "Figma" },
      { icon: "/html.svg", label: "HTML" },
      { icon: "/css.svg", label: "CSS" },
      { icon: "/javascript.svg", label: "JS" },
      { icon: "/shopify.svg", label: "Shopify" },
    ],
    featured: false,
    image: "/project/aventus.webp",
  },
];
