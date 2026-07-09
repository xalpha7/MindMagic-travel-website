import { blogs } from "../blog/data/blogs";

export interface SlideItem {
  image: string;
  badge: string;
  title: string;
  subtitle: string;
  primaryBtnText: string;
  link: string;
}

export const SliderData: SlideItem[] = blogs.map((blog) => ({
  image: blog.thumbnail,
  badge: `${blog.country} • ${blog.booking.bestSeason}`,
  title: blog.title,
  subtitle: blog.shortDescription,
  primaryBtnText: "Explore Journey",
  link: `/blog/${blog.id}`,
}));