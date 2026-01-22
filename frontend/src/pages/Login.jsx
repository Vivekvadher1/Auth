import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../services/authService";
import { AuthContext } from "../context/AuthContext";
import { BsEyeFill, BsEyeSlashFill } from "react-icons/bs";
import {
  FormWrapper,
  StyledForm,
  Title,
  Input,
  Button,
  Message,
  PasswordWrapper,
  EyeIcon,
} from "../styles/RegisterStyles";

const Login = () => {
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [remember, setRemember] = useState(false);
  const [showForgot, setShowForgot] = useState(false);
  const [forgotEmail, setForgotEmail] = useState("");
  const [forgotMessage, setForgotMessage] = useState("");

  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await loginUser(form);

      // console.log("Login API response:", res.data); // 👈 ADD THIS
      // console.log(" Token from backend", res.data.token); //testing

      login(res.data.token, res.data.user); // Pass token and user

      // console.log("Called login() from context"); // 👈 ADD THIS

      navigate("/profile");
    } catch (err) {
      setError(err.response?.data?.message || "Login failed");
    } finally {
      setLoading(false);
    }
  };

  const handleForgot = (e) => {
    e.preventDefault();
    setForgotMessage("If this email exists, reset instructions were sent.");
    setForgotEmail("");
  };

  return (
    <FormWrapper>
      <StyledForm onSubmit={handleSubmit} autoComplete="off">
        <Title>Login</Title>

        {error && <Message error>{error}</Message>}

        {/* Email */}
        <Input
          placeholder="Email"
          type="email"
          name="email"
          autoComplete="new-email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          required
        />

        {/* Password */}
        <PasswordWrapper>
          <Input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            value={form.password}
            autoComplete="new-password"
            onChange={(e) => setForm({ ...form, password: e.target.value })}
            required
          />

          <EyeIcon onClick={() => setShowPassword(!showPassword)}>
            {showPassword ? (
              <BsEyeSlashFill size={18} />
            ) : (
              <BsEyeFill size={18} />
            )}
          </EyeIcon>
        </PasswordWrapper>

        {/* Rember + Forget */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: "0.85rem",
          }}
        >
          <label style={{ display: "flex", alignItems: "center", gap: "6px" }}>
            <input
              type="checkbox"
              checked={remember}
              onChange={(e) => setRemember(e.target.checked)}
            />
            Remember me
          </label>

          <span
            style={{
              color: "#ff7a18",
              cursor: "pointer",
              fontSize: "15px",
            }}
            onClick={() => setShowForgot(!showForgot)}
          >
            Forgot password?
          </span>
        </div>

        {/* Forgot Password UI */}
        {showForgot && (
          <>
            <Input
              placeholder="Enter your email"
              type="email"
              value={forgotEmail}
              onChange={(e) => setForgotEmail(e.target.value)}
              required
            />

            <Button type="button" onClick={handleForgot}>
              Send Reset Link
            </Button>

            {forgotMessage && <Message>{forgotMessage}</Message>}
          </>
        )}

        <Button disabled={loading}>
          {loading ? "Logging in..." : "Login"}
        </Button>
      </StyledForm>
    </FormWrapper>
  );
};

export default Login;
