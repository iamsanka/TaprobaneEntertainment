export interface EventItem {
  id: number;
  title: string;
  category: string;
  date: string;
  location: string;
  description: string;
  image?: string; // optional if you want to add images later
}

export const eventsData: EventItem[] = [
  {
    id: 1,
    title: "Taprobane",
    category: "Music & Live Performances",
    date: "March 15, 2025",
    location: "Helsinki, Finland",
    description:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 2,
    title: "Festival",
    category: "Culinary & Cultural Showcases",
    date: "April 27, 2025",
    location: "Tallinn, Estonia",
    description:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 3,
    title: "Film Night",
    category: "Film & Theatre",
    date: "May 10, 2025",
    location: "Stockholm, Sweden",
    description:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 4,
    title: "Colours of Heritage",
    category: "Cultural Festivals",
    date: "June 22, 2025",
    location: "Copenhagen, Denmark",
    description:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
];
