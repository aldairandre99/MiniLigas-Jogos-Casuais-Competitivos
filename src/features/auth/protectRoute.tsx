import { Navigate } from "react-router-dom";

import { useAuthStore } from "@/store/auth-store";

interface ProtectedRouteProps {
  children: React.ReactNode;
  allowedTypes?: ("admin" | "user")[]; // default: qualquer usuário logado
}

export const ProtectedRoute = ({
  children,
  allowedTypes,
}: ProtectedRouteProps) => {
  const currentUser = useAuthStore((s) => s.currentUser);

  if (!currentUser) return <Navigate replace to="/login" />;

  if (allowedTypes && !allowedTypes.includes(currentUser.type)) {
    return <Navigate replace to="/unauthorized" />; // ou /login, ou página de erro
  }

  return <>{children}</>;
};
