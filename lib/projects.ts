export type Project = {
  id: number;
  slug: string;
  title: string;
  categories: string[];
  description: string;
  tags: string[];
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
      "A color exploration tool that helps designers create harmonious color palettes with accessibility in mind.",
    tags: ["Figma", "Color Theory", "Accessibility"],
    featured: true,
    image: "/projects/kaleido-colorlab.webp",
  },
  {
    id: 2,
    slug: "gaahleri-shop",
    title: "Gaahleri Shop",
    categories: ["UX Design", "Front-end Development"],
    description:
      "E-commerce experience redesign for a boutique fashion brand, focusing on mobile-first shopping journey.",
    tags: ["E-commerce", "Mobile", "Prototyping"],
    featured: false,
    image: "/projects/gaahleri-shop.webp",
  },
  {
    id: 3,
    slug: "yololiv-user-stories",
    title: "YoloLiv User Stories",
    categories: ["User Research"],
    description:
      "In-depth user research study uncovering streaming creators' pain points and workflow optimization needs.",
    tags: ["Interviews", "Personas", "Journey Mapping"],
    featured: false,
    image: "/projects/yololiv-user-stories.webp",
  },
];
