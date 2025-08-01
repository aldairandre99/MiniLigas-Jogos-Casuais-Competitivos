import { Skeleton } from "@heroui/skeleton";

export const OnboardingLoader = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4 flex">
      <div className="relative w-full max-w-[320px] mx-auto flex flex-col items-center justify-between h-full z-10 gap-y-20">
        <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden mb-4">
          <div className="h-full w-2/3 bg-orange-400" />
        </div>

        <div className="flex flex-col items-center justify-center gap-y-8 w-full">
          <Skeleton className="w-40 h-40 rounded-xl" />
          <div className="flex justify-center gap-6">
            <Skeleton className="w-8 h-8 rounded-full" />
            <Skeleton className="w-8 h-8 rounded-full" />
            <Skeleton className="w-8 h-8 rounded-full" />
          </div>
          <Skeleton className="w-32 h-8 rounded-md mt-2" />
          <div className="flex gap-x-2 w-full justify-center">
            <Skeleton className="w-24 h-10 rounded-md" />
            <Skeleton className="w-24 h-10 rounded-md" />
          </div>
        </div>
      </div>
    </div>
  );
};
