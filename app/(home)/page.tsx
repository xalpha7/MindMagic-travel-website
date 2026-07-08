import Front from "../(main)/components/Front";
import CarousalComponent from "../(main)/components/CarousalComponent";
import Footer from "../(main)/components/Footer";

export default function Home() {
  return (
    <div className="homecontainer">
      <Front />
      <CarousalComponent />
    </div>
  );
}
