import { Navigate } from "react-router-dom";
import { useAuthStore } from "@/store/auth-store";

export const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const currentUser = useAuthStore((s) => s.currentUser);

  if (!currentUser) return <Navigate to="/login" replace />;
  return <>{children}</>;
};
