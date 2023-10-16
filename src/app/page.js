import "./page.scss"
import EmptyBtn from "./components/EmptyBtn";

export default function Home() {
  return (
    <main className="page-spacing">
      <section className="container__hero">
        <div className="container__hero-header">
          <h1>
            Designing Tomorrow,
            <br />
            <em className="move-text">
              <span className="today text-gradient">Today</span>
              <span className="together text-gradient">Together</span>
            </em>
          </h1>
        </div>
        <div className="container__hero-text">
          <EmptyBtn path={"contact"} text={"Let's meet!"} />
          <p>
            Our motto is more than words. It's our commitment. We believe in
            designing tomorrow's solutions today with our clients. It's about
            creativity, partnership, and expertise combined to shape a brighter
            digital future.
          </p>
        </div>
      </section>
      <section></section>
    </main>
  );
}
