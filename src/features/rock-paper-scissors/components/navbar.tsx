import {
  Navbar as HeroUINavbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem
} from "@heroui/navbar";
import { ThemeSwitch } from "@/components/theme-switch";
import { SoundSwitch } from "@/components/sound-switch"
import { UserIcon } from "../../../components/userIcon";

export const Navbar = () => {
  return (
    <HeroUINavbar maxWidth="xl" position="sticky">
      <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
        <NavbarBrand className="gap-3 max-w-fit sm:hidden">
          <UserIcon/>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent
        className="hidden sm:flex basis-1/5 sm:basis-full"
        justify="end"
      >
        <NavbarItem className="hidden sm:flex gap-2">
          <SoundSwitch color="text-default-500"/>
          <ThemeSwitch  className="mr-4"/>
          <UserIcon />
        </NavbarItem>
      </NavbarContent>

      <NavbarContent className="sm:hidden basis-1 pl-4" justify="end">
        <SoundSwitch color="text-default-500"/>
        <ThemeSwitch />
      </NavbarContent>
    </HeroUINavbar>
  );
};
