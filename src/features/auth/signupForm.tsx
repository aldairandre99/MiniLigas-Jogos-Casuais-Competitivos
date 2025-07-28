// src/components/auth/RegisterForm.tsx
import { useState } from "react";
import { Input } from "@heroui/input";
import { Button } from "@heroui/button";
import { useAuthStore } from "@/store/auth-store";
import { useNavigate } from "react-router-dom";
import { Form } from "@heroui/form";
import { XMarkIcon } from "@heroicons/react/24/solid";

interface Props {
  onSwitch: () => void;
  onClose: () => void;
}

export const RegisterForm = ({ onSwitch, onClose }: Props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const register = useAuthStore((s) => s.register);
  const navigate = useNavigate();

  const handleSubmit = () => {
    const success = register(username, password);
    /* if (!success) return alert("Usuário já existe"); */

    const user = useAuthStore.getState().currentUser;
    navigate("/");
  };

  return (
    <Form
      onSubmit={handleSubmit}
      className="space-y-4">
      <Button
        variant="light"
        endContent={<XMarkIcon className="size-7" />}
        onPress={onClose}
        className="text-gray-500 underline">
      </Button>
      <h2 className="text-xl font-semibold text-center">Criar Conta</h2>

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
        Cadastrar
      </Button>

      <div className="flex justify-between items-center text-sm">
        <button onClick={onSwitch} className="text-blue-600 underline">
          Já tenho conta
        </button>
        <button onClick={onClose} className="text-gray-500 underline">
          Fechar
        </button>
      </div>
    </Form>
  );
};
