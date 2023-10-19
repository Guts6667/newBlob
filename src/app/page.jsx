import HeroHome from "@/components/HeroHome";
import SelectedWorks from "@/components/SelectedWorks";

export default function Home() {
  return (
    <main className="flex flex-col gap-y-100 mt-[200px] px-25 lg:px-50">
      <HeroHome />
      <SelectedWorks />
    </main>
  );
}
