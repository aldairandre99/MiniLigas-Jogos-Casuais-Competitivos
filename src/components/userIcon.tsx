import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@heroui/dropdown";
import { User } from "@heroui/user";
import { Link, useNavigate } from "react-router-dom";

import { useAuthStore } from "@/store/auth-store";

export const UserIcon = () => {
  const currentUser = useAuthStore((u) => u.currentUser);
  const logout = useAuthStore((e) => e.logout);
  const navigate = useNavigate();

  function handleLogout() {
    logout();
    navigate("/");
  }

  function handleLogin() {
    navigate("/login");
  }

  return (
    <Dropdown placement="bottom-start">
      <DropdownTrigger>
        <User
          as="button"
          avatarProps={{
            isBordered: true,
            src:
              currentUser?.type === "admin"
                ? "/assets/adminPhoto.png"
                : "/assets/userPhoto.png",
          }}
          className="transition-transform"
          description={`${currentUser?.username || "Guest"}`}
          name={currentUser?.username}
        />
      </DropdownTrigger>
      <DropdownMenu aria-label="User Actions" variant="flat">
        <DropdownItem key="profile" className="h-14 gap-2">
          <p className="font-bold">Signed in as</p>
          <p className="font-bold">{`@${currentUser?.username || "Guest"}`}</p>
        </DropdownItem>
        {currentUser ? (
          <DropdownItem key="home">
            <Link to="/"> Home</Link>
          </DropdownItem>
        ) : (
          <></>
        )}
        <DropdownItem key="rps" className="h-14 gap-2">
          <Link to="/home-rps">Pedra Papel Tesoura</Link>
        </DropdownItem>
        {currentUser?.type === "admin" ? (
          <DropdownItem key="dasboard">
            <Link to="/dashboard">Dashboard</Link>
          </DropdownItem>
        ) : (
          <></>
        )}
        {currentUser ? (
          <DropdownItem key="logout" color="danger" onPress={handleLogout}>
            Log Out
          </DropdownItem>
        ) : (
          <DropdownItem key="login" color="danger" onPress={handleLogin}>
            Login
          </DropdownItem>
        )}
      </DropdownMenu>
    </Dropdown>
  );
};
