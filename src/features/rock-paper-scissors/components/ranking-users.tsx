import { ChevronLeftIcon } from "@heroicons/react/24/outline";
import { User } from "@heroui/user";

export const RankingUsers = () => {
  return (
    <div className="relative mt-6">
      <div className="flex items-center gap-4 overflow-x-auto scrollbar-hide px-4 py-3 bg-white/5 rounded-xl shadow-inner">
        <div className="shrink-0">
          <ChevronLeftIcon className="w-6 h-6 text-white/70" />
        </div>

        {[
          {
            name: "Aldair",
            victories: 20,
            avatar: "https://www.svgrepo.com/show/382102/male-avatar-boy-face-man-user-8.svg",
          },
          {
            name: "Maria",
            victories: 15,
            avatar: "https://www.svgrepo.com/show/382098/female-avatar-girl-face-woman-user-6.svg",
          },
          {
            name: "João",
            victories: 10,
            avatar: "https://www.svgrepo.com/show/382102/male-avatar-boy-face-man-user-8.svg",
          },
          {
            name: "Clara",
            victories: 9,
            avatar: "https://www.svgrepo.com/show/382098/female-avatar-girl-face-woman-user-6.svg",
          },
        ].map((user, index) => (
          <User
            key={index}
            avatarProps={{
              src: user.avatar,
              className: `ring-2 ring-white ${index === 0 ? "ring-yellow-400 scale-105" : ""}`,
            }}
            description={
              <span className="text-white">{user.victories} vitórias</span>
            }
            name={user.name}
            className="min-w-[160px] bg-[#7267ec] p-3 rounded-xl shadow-md"
          />
        ))}
      </div>
    </div>
  );
};
