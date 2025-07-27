import { Link } from "@heroui/link";
import {
  Navbar as HeroUINavbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem
} from "@heroui/navbar";
import { link as linkStyles } from "@heroui/theme";
import clsx from "clsx";
import { siteConfig } from "@/config/site";
import { ThemeSwitch } from "@/components/theme-switch";
import { SoundSwitch } from "@/components/sound-switch"
import { UserIcon } from "../../../components/userIcon";
import { useAuthStore } from "@/store/auth-store";
import { useNavigate } from "react-router-dom";

export const Navbar = () => {
  const logout = useAuthStore((e) => e.logout)
  const navigate = useNavigate()
  return (
    <HeroUINavbar maxWidth="xl" position="sticky">
      <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
        <NavbarBrand className="gap-3 max-w-fit sm:hidden">
          <UserIcon/>
        </NavbarBrand>
        <div className="hidden lg:flex gap-4 justify-start ml-2">
          
            <NavbarItem key={""}>
              <Link
                className={clsx(
                  linkStyles({ color: "foreground" }),
                  "data-[active=true]:text-primary data-[active=true]:font-medium",
                )}
                color="foreground"
                href={"#"}
              >
                {}
              </Link>
            </NavbarItem>
         
        </div>
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
