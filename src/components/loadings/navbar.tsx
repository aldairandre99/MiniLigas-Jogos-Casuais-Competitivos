import { Skeleton } from "@heroui/skeleton";

export const NavbarLoader = () => {
  return (
    <header className="w-full bg-white dark:bg-gray-900 px-4 py-3 flex items-center justify-between md:items-end md:flex-col-reverse">
      <div className="flex items-center gap-3 sm:hidden">
        <Skeleton className="w-10 h-10 md:rounded-full" />
      </div>

      <div className="flex items-center gap-3 ">
        <Skeleton className="w-6 h-6 rounded" />
        <Skeleton className="w-6 h-6 rounded" />
        <Skeleton className="w-10 h-10 rounded-full" />
      </div>
    </header>
  );
};
