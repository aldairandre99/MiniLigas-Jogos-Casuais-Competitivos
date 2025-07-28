// src/components/auth/LoginForm.tsx
import { useState } from "react";
import { Input } from "@heroui/input";
import { Button } from "@heroui/button";
import { useAuthStore } from "@/store/auth-store";
import { useNavigate } from "react-router-dom";
import { XMarkIcon } from "@heroicons/react/24/solid";
import { Form } from "@heroui/form";
interface Props {
    onSwitch: () => void;
    onClose: () => void;
}

export const LoginForm = ({ onSwitch, onClose }: Props) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const login = useAuthStore((s) => s.login);
    const navigate = useNavigate();

    const handleSubmit = () => {
        const success = login(username, password);
        /* if (!success) return alert("Credenciais inválidas"); */

        const user = useAuthStore.getState().currentUser;
        navigate(user?.type === "admin" ? "/dashboard" : "/");
    };

    return (
        <Form
            onSubmit={handleSubmit}
            className="space-y-4">
            <Button
                variant="light"
                endContent={<XMarkIcon className="size-7" />}
                onPress={()=>{
                    onClose()
                    navigate("/")
                }}
                className="text-gray-500 underline">
            </Button>
            <h2 className="text-xl font-semibold text-center">Entrar</h2>

            <Input
                required
                errorMessage="Campo obrigatório"
                autoFocus
                id="username"
                label="Nome de usuário"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />

            <Input
                required
                errorMessage="Campo obrigatório"
                autoFocus
                id="password"
                label="Senha"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />

            <Button type="submit" color="primary" className="w-full">
                Entrar
            </Button>

            <div className="flex justify-between items-center text-sm">
                <button onClick={onSwitch} className="text-blue-600 underline">
                    Criar conta
                </button>
            </div>
        </Form>
    );
};
