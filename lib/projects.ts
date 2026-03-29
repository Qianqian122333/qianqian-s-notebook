export type Project = {
  id: number;
  slug: string;
  title: string;
  category: string;
  description: string;
  tags: string[];
  featured: boolean;
};

export const projects: Project[] = [
  {
    id: 1,
    slug: "kaleido-colorlab",
    title: "Kaleido ColorLab",
    category: "UX Design",
    description:
      "A color exploration tool that helps designers create harmonious color palettes with accessibility in mind.",
    tags: ["Figma", "Color Theory", "Accessibility"],
    featured: true,
  },
  {
    id: 2,
    slug: "gaahleri-shop",
    title: "Gaahleri Shop",
    category: "UX Design",
    description:
      "E-commerce experience redesign for a boutique fashion brand, focusing on mobile-first shopping journey.",
    tags: ["E-commerce", "Mobile", "Prototyping"],
    featured: true,
  },
  {
    id: 3,
    slug: "yololiv-user-stories",
    title: "YoloLiv User Stories",
    category: "User Research",
    description:
      "In-depth user research study uncovering streaming creators' pain points and workflow optimization needs.",
    tags: ["Interviews", "Personas", "Journey Mapping"],
    featured: false,
  },
];
