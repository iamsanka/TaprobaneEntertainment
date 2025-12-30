export interface EventItem {
  id: number;
  title: string;
  category: string;
  date: string;
  location: string;
  description: string;
  image?: string; // optional if you want to add images later
  video?: string; // optional if you want to add videos later
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
    video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
  
];
