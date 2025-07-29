import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthStore } from "@/store/auth-store";
import { Card, CardBody } from "@heroui/card";
import { Input } from "@heroui/input";
import { Button } from "@heroui/button";

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
      alert("Credenciais inválidas ou usuário já existe");
      return;
    }

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
            variant="solid"
            color="primary"
            size="lg"
            onPress={handleSubmit}>
            {isRegistering ? "Cadastrar" : "Entrar"}
          </Button>

          <div className="flex flex-col">
            <Button
              variant="flat"
              size="lg"
              onPress={() => setIsRegistering(!isRegistering)}
              className=""
            >
              {
                isRegistering ?
                "Entrar" :
                "Cadastrar"
              }
            </Button>
          </div>
        </CardBody>
      </Card>
    </div>
  );
};
