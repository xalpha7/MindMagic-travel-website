import { notFound } from "next/navigation";
import styles from "./page.module.css";

import { blogs } from "../data/blogs";



import { TravelExperience } from "../types/travel";
import Hero from "./components/Hero/page";
import QuickInfo from "./components/QuickInfo/page";
import Overview from "./components/Overview/page";
import Gallery from "./components/Gallary/page";
import Itinerary from "./components/Itinerary/page";
import Attractions from "./components/Attractions/page";
import Route from "./components/Route/page";
import HotelsFood from "./components/HotelsFood/page";
import TipsReviews from "./components/TipsReviews/page";
import Booking from "./components/Bookings/page";

interface Props {
  params: Promise<{
    id: string;
  }>;
}

export default async function TravelDetails({ params }: Props) {
  const { id } = await params;

  const blog = blogs.find((item: TravelExperience) => item.id === id);

  if (!blog) {
    notFound();
  }

  return (
    <main className={"appPage"}>
      <Hero blog={blog} />

     <section className={"pageSection"}>
        <QuickInfo blog={blog} />
        <Overview blog={blog} />
        <Gallery blog={blog} />
        <Itinerary blog={blog} />
        <Attractions blog={blog} />
        <Route blog={blog} />
        <HotelsFood blog={blog} />
        <TipsReviews blog={blog} />
        <Booking blog={blog} />
      </section>
    </main>
  );
}