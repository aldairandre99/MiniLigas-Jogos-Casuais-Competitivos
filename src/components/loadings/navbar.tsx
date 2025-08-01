import { Skeleton } from "@heroui/skeleton";

export const NavbarLoader = () => {
  return (
    <header className="w-full bg-white dark:bg-gray-900 px-4 py-3 shadow-md flex items-center justify-between">
      <div className="flex items-center gap-3 sm:hidden">
        <Skeleton className="w-10 h-10 rounded-full" />
      </div>

      <div className="flex items-center gap-3">
        <Skeleton className="w-6 h-6 rounded" />
        <Skeleton className="w-6 h-6 rounded" />
        <Skeleton className="w-10 h-10 rounded-full" />
      </div>
    </header>
  );
};
