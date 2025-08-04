import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardBody } from "@heroui/card";
import { Input } from "@heroui/input";
import { Button } from "@heroui/button";

import { useAuthStore } from "@/store/auth-store";
import { addToast } from "@heroui/toast";

export const LoginPage = () => {
  const [isRegistering, setIsRegistering] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const login = useAuthStore((s) => s.login);
  const register = useAuthStore((s) => s.register);
  const navigate = useNavigate();

  const handleSubmit = () => {
    const success = isRegistering
      ? register(username, password)
      : login(username, password);

    if (!success) {
      addToast({
        title: isRegistering ? "Registro falhou" : "Login falhou",
        description: isRegistering
          ? "Este nome de usuário já está em uso."
          : "Usuário ou senha incorretos.",
        variant: "flat",
        color: "warning"
      });
      return;
    }

    addToast({
      title: isRegistering ? "Conta criada com sucesso!" : "Login realizado!",
      description: isRegistering
        ? "Você já pode jogar 🎮"
        : "Bem-vindo de volta!",
      variant: "flat",
      color: "warning"
    });
    navigate("/");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-600 to-purple-600 px-4">
      <Card className="w-full max-w-sm">
        <CardBody className="p-6 space-y-4">
          <h1 className="text-2xl font-bold text-center">
            {isRegistering ? "Criar Conta" : "Entrar"}
          </h1>

          <div className="space-y-2">
            <Input
              id="username"
              label="Nome de usuário"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>

          <div className="space-y-2">
            <Input
              id="password"
              label="Digite sua senha"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <Button
            color="primary"
            size="lg"
            variant="solid"
            onPress={handleSubmit}
          >
            {isRegistering ? "Cadastrar" : "Entrar"}
          </Button>

          <div className="flex flex-col">
            <Button
              className=""
              size="lg"
              variant="flat"
              onPress={() => setIsRegistering(!isRegistering)}
            >
              {isRegistering ? "Entrar" : "Cadastrar"}
            </Button>
          </div>
        </CardBody>
      </Card>
    </div>
  );
};
