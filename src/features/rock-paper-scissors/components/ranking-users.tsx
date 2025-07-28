import { ChevronLeftIcon } from "@heroicons/react/24/outline";
import { User } from "@heroui/user";


export const RankingUsers = () => {
    return (
        <div className="flex flex-row gap-x-2 overflow-x-scroll mt-4">
            <ChevronLeftIcon className="size-6" />
            <User
                avatarProps={{
                    src: "https://www.svgrepo.com/show/382102/male-avatar-boy-face-man-user-8.svg",
                }}
                description={`20 vitorias`}
                name="Aldair"
            />
            <User
                avatarProps={{
                    src: "https://www.svgrepo.com/show/382098/female-avatar-girl-face-woman-user-6.svg",
                }}
                description={`15 vitorias`}
                name="Maria"
            />
            <User
                avatarProps={{
                    src: "https://www.svgrepo.com/show/382102/male-avatar-boy-face-man-user-8.svg",
                }}
                description={`10 vitorias`}
                name="João"
                
            />
            <User
                avatarProps={{
                    src: "https://www.svgrepo.com/show/382098/female-avatar-girl-face-woman-user-6.svg",
                }}
                description={`15 vitorias`}
                name="Maria"
            />
            <User
                avatarProps={{
                    src: "https://www.svgrepo.com/show/382102/male-avatar-boy-face-man-user-8.svg",
                }}
                description={`10 vitorias`}
                name="João"
            />

        </div>
    );
}