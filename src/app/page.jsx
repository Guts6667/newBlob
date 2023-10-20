import AboutHome from "@/components/(Home)/AboutHome";
import HeroHome from "@/components/(Home)/HeroHome";
import SelectedWorks from "@/components/(Home)/SelectedWorks";
import ServicesHome from "@/components/(Home)/ServicesHome";

export default function Home() {
  return (
    <main className="flex flex-col gap-y-100 mt-[150px] px-25 lg:px-50">
      <HeroHome />
      <SelectedWorks />
      <ServicesHome />
      <AboutHome />
    </main>
  );
}
