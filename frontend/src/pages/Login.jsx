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
  RememberRow,
  ForgetText,
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
    if (loading) return;

    if (!form.email || !form.password) {
      setError("Email and password are required");
      return;
    }

    if (!/\S+@\S+\.\S+/.test(form.email)) {
      setError("Please enter a valid email");
      return;
    }
    setLoading(true);

    try {
      const res = await loginUser(form);

      await login(res.data.token, res.data.user, remember); // Pass token and user(login call)
      // Redirect based on role
      if (res.data.user.role === "admin") {
        navigate("/admin");
      } else {
        navigate("/profile");
      }
    } catch (err) {
      setError(err.response.data.message || "Login failed");
      setForm({ ...form, password: "" });
    } finally {
      setLoading(false);
    }
  };

  const handleForgot = (e) => {
    e.preventDefault();
    setForgotMessage("If this email exists, reset instructions were sent.");
    setForgotEmail("");
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    if (error) setError("");
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
          onChange={handleChange}
          required
        />

        {/* Password */}
        <PasswordWrapper>
          <Input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            name="password"
            value={form.password}
            autoComplete="new-password"
            onChange={handleChange}
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
        <RememberRow>
          <label style={{ display: "flex", alignItems: "center", gap: "6px" }}>
            <input
              type="checkbox"
              checked={remember}
              onChange={(e) => setRemember(e.target.checked)}
            />
            Remember me
          </label>

          <ForgetText onClick={() => setShowForgot(!showForgot)}>
            Forgot password?
          </ForgetText>
        </RememberRow>

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
