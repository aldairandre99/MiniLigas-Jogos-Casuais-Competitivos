// src/components/auth/RegisterForm.tsx
import { useState } from "react";
import { Input } from "@heroui/input";
import { Button } from "@heroui/button";
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
  const navigate = useNavigate();

  const handleSubmit = () => {
    navigate("/");
  };

  return (
    <Form className="space-y-4" onSubmit={handleSubmit}>
      <Button
        className="text-gray-500 underline"
        endContent={<XMarkIcon className="size-7" />}
        variant="light"
        onPress={onClose}
      />
      <h2 className="text-xl font-semibold text-center">Criar Conta</h2>

      <Input
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
        Cadastrar
      </Button>

      <div className="flex justify-between items-center text-sm">
        <button className="text-blue-600 underline" onClick={onSwitch}>
          Já tenho conta
        </button>
        <button className="text-gray-500 underline" onClick={onClose}>
          Fechar
        </button>
      </div>
    </Form>
  );
};
