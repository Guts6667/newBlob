import "./page.scss";
import EmptyBtn from "./components/EmptyBtn";
import CardSelectedWork from "./components/CardSelectedWork";
import { promises as fs } from "fs";
import CardService from "./components/CardServices";

export default async function Home() {
  const datasSelectedWork = await fs.readFile(
    process.cwd() + "/public/datas/works.json",
    "utf8"
  );
  const selectedWorks = JSON.parse(datasSelectedWork).slice(0, 3);
  console.log(selectedWorks);
  const datasServices = await fs.readFile(
    process.cwd() + "/public/datas/services.json",
    "utf8"
  );
  const services = JSON.parse(datasServices);
  console.log(services);
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
      <section className="container__selectedWorks">
        <h2>Selected Works</h2>
        <div className="container__works">
          {selectedWorks.map((item, index) => (
            <CardSelectedWork
              key={index}
              img={item.mainImage}
              title={item.title}
              type={item.type}
              path={"/works/" + item.title}
            />
          ))}
        </div>
      </section>
      <section className="container__services">
        <h2>Services</h2>
        <div className="container__services-cards">
          {services.map((service, index) => (
            <CardService
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.desc}
              services={service.services}
            />
          ))}
        </div>
      </section>
    </main>
  );
}
