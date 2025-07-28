// src/pages/LoginPage.tsx
import { useState } from "react";
import { Card, CardBody } from "@heroui/card";
import { LoginForm } from "@/features/auth/loginForm";
import { RegisterForm } from "@/features/auth/signupForm";

export const LoginPage = () => {
  const [showForm, setShowForm] = useState<"login" | "register" | null>("login");

  const handleClose = () => setShowForm(null);
  const handleSwitch = () =>
    setShowForm((prev) => (prev === "login" ? "register" : "login"));

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-600 to-purple-600 px-4">
      {showForm && (
        <Card className="w-full max-w-sm shadow-2xl">
          <CardBody className="p-6">
            {showForm === "login" ? (
              <LoginForm onSwitch={handleSwitch} onClose={handleClose} />
            ) : (
              <RegisterForm onSwitch={handleSwitch} onClose={handleClose} />
            )}
          </CardBody>
        </Card>
      )}

      {!showForm && (
        <button
          onClick={() => setShowForm("login")}
          className="text-white text-lg underline"
        >
          Fazer Login
        </button>
      )}
    </div>
  );
};
