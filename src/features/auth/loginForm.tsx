import { useState } from "react";
import { Input } from "@heroui/input";
import { Button } from "@heroui/button";
import { useNavigate } from "react-router-dom";
import { XMarkIcon } from "@heroicons/react/24/solid";
import { Form } from "@heroui/form";

import { useAuthStore } from "@/store/auth-store";
interface Props {
  onSwitch: () => void;
  onClose: () => void;
}

export const LoginForm = ({ onSwitch, onClose }: Props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = () => {
    const user = useAuthStore.getState().currentUser;

    navigate(user?.type === "admin" ? "/dashboard" : "/");
  };

  return (
    <Form className="space-y-4" onSubmit={handleSubmit}>
      <Button
        className="text-gray-500 underline"
        endContent={<XMarkIcon className="size-7" />}
        variant="light"
        onPress={() => {
          onClose();
          navigate("/");
        }}
      />
      <h2 className="text-xl font-semibold text-center">Entrar</h2>

      <Input
        autoFocus
        required
        errorMessage="Campo obrigatório"
        id="username"
        label="Nome de usuário"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />

      <Input
        required
        errorMessage="Campo obrigatório"
        id="password"
        label="Senha"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <Button className="w-full" color="primary" type="submit">
        Entrar
      </Button>

      <div className="flex justify-between items-center text-sm">
        <button className="text-blue-600 underline" onClick={onSwitch}>
          Criar conta
        </button>
      </div>
    </Form>
  );
};
