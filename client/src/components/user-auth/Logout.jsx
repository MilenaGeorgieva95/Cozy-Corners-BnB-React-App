import { Navigate } from "react-router";
import { useLogout } from "../../api/authApi";

export default function Logout() {
  useLogout();
  return (
    <>
      <Navigate to="/" />
    </>
  );
}
