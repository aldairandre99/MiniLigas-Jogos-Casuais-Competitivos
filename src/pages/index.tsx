import { Banner } from "@/components/banner";
import { RankingUsers } from "@/features/rock-paper-scissors/components/ranking-users";
import DefaultLayout from "@/layouts/default";



export default function IndexPage() {
  return (
    <DefaultLayout>
      <section className="flex flex-col  gap-y-6">
        <Banner />
        <div className="font-semibold">
          <p>RANKING</p>
          <p>MELHORES JOGADORES</p>
          <RankingUsers />
        </div>
      </section>
    </DefaultLayout>
  );
}
