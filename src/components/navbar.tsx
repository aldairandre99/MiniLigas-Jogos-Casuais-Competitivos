import { Link } from "@heroui/link";
import {
  Navbar as HeroUINavbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
} from "@heroui/navbar";
import { link as linkStyles } from "@heroui/theme";
import clsx from "clsx";
import { Button } from "@heroui/button";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

import { UserIcon } from "./userIcon";

import { ThemeSwitch } from "@/components/theme-switch";
import { SoundSwitch } from "@/components/sound-switch";
import { useAuthStore } from "@/store/auth-store";
import { PlayIcon } from "@heroicons/react/24/outline";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const currentUser = useAuthStore((u) => u.currentUser);
  const logout = useAuthStore((e) => e.logout);
  const navigate = useNavigate();

  return (
    <HeroUINavbar
      className=""
      isMenuOpen={isMenuOpen}
      maxWidth="xl"
      position="sticky"
      onMenuOpenChange={setIsMenuOpen}
    >
      <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
        <NavbarBrand className="gap-3 max-w-fit">
          <Link
            className="flex justify-start items-center gap-1"
            color="foreground"
            href="/"
          >
            <p className="font-bold text-inherit text-2xl">Mini Ligas</p>
          </Link>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent
        className="hidden sm:flex basis-1/5 sm:basis-full"
        justify="end"
      >
        <NavbarItem className="hidden sm:flex gap-2">
          <SoundSwitch color="text-default-500" />
          <ThemeSwitch className="mr-4" />
          <UserIcon />
        </NavbarItem>
      </NavbarContent>

      <NavbarContent className="sm:hidden basis-1 pl-4" justify="end">
        <SoundSwitch color="text-default-500" />
        <ThemeSwitch />
        <NavbarMenuToggle />
      </NavbarContent>

      <NavbarMenu className="flex justify-between">
        <NavbarItem>
          <Link
            className={clsx(
              linkStyles({ color: "foreground" }),
              "data-[active=true]:text-primary data-[active=true]:font-medium",
              "flex justify-between items-center",
            )}
            color="foreground"
            href="/splash-screen-rps"
            onPress={() => {
              navigate("/splash-screen-rps");
            }}
          >
            <div className="flex items-center justify-between w-full">
              <div className="text-md font-semibold text-md py-4">
                PEDRA PAPEL TESOURA
              </div>
              <div>
                <PlayIcon className="size-6"/>
              </div>
            </div>
          </Link>
          {currentUser?.type === "admin" ? (
            <Link
              className={clsx(
                linkStyles({ color: "foreground" }),
                "data-[active=true]:text-primary data-[active=true]:font-medium",
                "flex justify-between items-center",
              )}
              color="foreground"
              onPress={() => {
                navigate("/dasboard");
              }}
            >
              <span className="text-md font-semibold text-md py-4">
                DASBOARD
              </span>
            </Link>
          ) : (
            ""
          )}
        </NavbarItem>
        <NavbarItem className="my-2 flex flex-col gap-2">
          {currentUser ? (
            <Button
              onPress={() => {
                setIsMenuOpen(!isMenuOpen);
                logout();
                navigate("/");
              }}
            >
              Logout
            </Button>
          ) : (
            <Button
              color="primary"
              onPress={() => {
                setIsMenuOpen(!isMenuOpen);
                navigate("/login");
              }}
            >
              Login
            </Button>
          )}
        </NavbarItem>
      </NavbarMenu>
    </HeroUINavbar>
  );
};
