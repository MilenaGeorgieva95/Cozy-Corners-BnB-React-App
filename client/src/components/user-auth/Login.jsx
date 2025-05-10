import { useContext } from "react";
import { useLogin } from "../../api/authApi";
import { UserContext } from "../contexts/UserContext";
import { Link } from "react-router";

export default function Login() {
  const { user, setUser } = useContext(UserContext);
  const { login } = useLogin();
  const loginHandler = async (formData) => {
    const formValues = Object.fromEntries(formData);

    try {
      const authData = await login(formValues.email, formValues.password);
      setUser(authData);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container d-flex justify-content-center align-items-center min-vh-100 bg-light">
      <div
        className="card login-container shadow-sm"
        style={{ maxWidth: "400px" }}
      >
        <div className="card-body">
          <h4 className="card-title text-center text-success mb-4">LOGIN</h4>
          <form action={loginHandler}>
            <div className="mb-3">
              <label htmlFor="email" className="form-label text-success">
                Email address
              </label>
              <input
                type="email"
                className="form-control border-success"
                id="email"
                placeholder="Enter email"
                required
                name="email"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label text-success">
                Password
              </label>
              <input
                type="password"
                className="form-control border-success"
                id="password"
                placeholder="Password"
                name="password"
                required
              />
            </div>
            <div className="d-grid">
              <button type="submit" className="btn btn-primary">
                Login
              </button>
            </div>
          </form>
          <p className="mt-2">
            Don't have an account?{" "}
            <Link to="/register">
              <strong>Register here</strong>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
