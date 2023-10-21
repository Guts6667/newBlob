import AboutHome from "@/components/(Home)/AboutHome";
import HeroHome from "@/components/(Home)/HeroHome";
import PreFooter from "@/components/(Home)/PreFooter";
import SelectedWorks from "@/components/(Home)/SelectedWorks";
import ServicesHome from "@/components/(Home)/ServicesHome";
import TeamHome from "@/components/(Home)/TeamHome";

export default function Home() {
  return (
    <main className="flex flex-col gap-y-[150px] mt-[150px] px-25 lg:px-50">
      <HeroHome />
      <SelectedWorks />
      <ServicesHome />
      <AboutHome />
      <TeamHome />
      <PreFooter />
    </main>
  );
}
