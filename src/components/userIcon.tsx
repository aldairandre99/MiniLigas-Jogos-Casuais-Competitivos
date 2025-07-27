import { useAuthStore } from "@/store/auth-store"
import { Dropdown, DropdownItem, DropdownMenu, DropdownTrigger } from "@heroui/dropdown"
import { User } from "@heroui/user"
import { useNavigate } from "react-router-dom"

export const UserIcon = () => {
    const currentUser = useAuthStore((u) => u.currentUser)
    const logout = useAuthStore(e => e.logout)
    const navigate = useNavigate()

    function handleLogout() {
        logout()
        navigate("/")
    }

    function handleLogin() {
        navigate("/login")
    }

    return (
        <Dropdown placement="bottom-start">
            <DropdownTrigger>
                <User
                    as="button"
                    avatarProps={{
                        isBordered: true,
                        src: "https://i.pravatar.cc/150?u=a042581f4e29026024d",
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
                {
                    currentUser ? (<DropdownItem
                        onPress={handleLogout}
                        key="logout"
                        color="danger"
                    >
                        Log Out
                    </DropdownItem>)
                        : <DropdownItem
                            onPress={handleLogin}
                            key="logout"
                            color="danger"
                        >
                            Login
                        </DropdownItem>
                }
            </DropdownMenu>
        </Dropdown>
    )
}