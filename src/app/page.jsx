import HeroHome from "@/components/HeroHome";
import SelectedWorks from "@/components/SelectedWorks";
import ServicesHome from "@/components/ServicesHome";

export default function Home() {
  return (
    <main className="flex flex-col gap-y-100 mt-[150px] px-25 lg:px-50">
      <HeroHome />
      <SelectedWorks />
      <ServicesHome />
    </main>
  );
}
