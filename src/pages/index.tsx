import { RankingUsers } from "@/features/rock-paper-scissors/components/ranking-users";
import SimpleSlider from "@/features/rock-paper-scissors/components/slider-images";
import DefaultLayout from "@/layouts/default";

export default function IndexPage() {
  return (
    <DefaultLayout>
      <section className="flex flex-col  gap-y-6">
        <SimpleSlider />
        <div className="font-semibold">
          <p>RANKING</p>
          <p>MELHORES JOGADORES</p>
          <RankingUsers/> 
        </div>
      </section>
    </DefaultLayout>
  );
}
