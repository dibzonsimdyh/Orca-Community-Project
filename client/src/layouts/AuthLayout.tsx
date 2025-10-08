import { Toaster } from "@/components/ui/sonner";
import { Outlet } from "react-router-dom";

const AuthLayout = () => {
  return (
    <div>
      <Toaster position="bottom-right" richColors />
    <Outlet />
    </div>
  )
}

export default AuthLayout