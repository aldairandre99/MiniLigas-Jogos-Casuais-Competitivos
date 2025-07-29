import { Image } from "@heroui/image";

import logo from "/public/assets/Logo-Animation-1.png";
export const Logo = () => {
  return (
    <>
      <Image alt="HeroUI hero Image" src={logo} width={200} />
    </>
  );
};
