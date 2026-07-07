export interface SlideItem {
  image: string;
  badge: string;
  title: string;
  subtitle: string;
  primaryBtnText: string;
  secondaryBtnText: string;
}

export const SliderData: SlideItem[] = [
  {
    image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1920&q=80",
    badge: "Adventure Tours",
    title: "Discover The Himalayas",
    subtitle: "Experience breathtaking peaks, pristine valleys, and unforgettable alpine adventures.",
    primaryBtnText: "Explore Tours",
    secondaryBtnText: "Learn More"
  },
  {
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1920&q=80",
    badge: "Beach Getaways",
    title: "Escape To Paradise",
    subtitle: "Crystal-clear turquoise waters, golden sands, and luxurious private resorts await.",
    primaryBtnText: "View Resorts",
    secondaryBtnText: "Book Now"
  },
  {
    image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=1920&q=80",
    badge: "Eco Travel",
    title: "Explore Wild Nature",
    subtitle: "Reconnect with the earth through ancient lush forests and hidden scenic hiking trails.",
    primaryBtnText: "Find Trails",
    secondaryBtnText: "Read Guide"
  },
  {
    image: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?auto=format&fit=crop&w=1920&q=80",
    badge: "Urban Wonders",
    title: "Vibrant Cityscapes",
    subtitle: "Immerse yourself in neon horizons, diverse cultural hubs, and historic modern architecture.",
    primaryBtnText: "See Cities",
    secondaryBtnText: "Itineraries"
  }
];