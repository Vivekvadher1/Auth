import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { registerUser } from "../services/authService";
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
  StrengthText,
} from "../styles/RegisterStyles";

const Register = () => {
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [strength, setStrength] = useState("");

  const navigate = useNavigate();

  const checkStrength = (password) => {
    if (password.length < 6) return "Weak";
    if (/[A-Z]/.test(password) && /[0-9]/.test(password)) return "Strong";
    if (/[a-z]/.test(password)) return "Medium";
    return "Weak";
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    setError("");

    if (form.password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    setLoading(true);

    try {
      await registerUser(form);

      setMessage("Registered successfully! Redirecting...");
      setForm({ name: "", email: "", password: "" });
      setConfirmPassword("");
      setStrength("");

      setTimeout(() => navigate("/login"), 1500);
    } catch (err) {
      setError(err.response?.data?.message || "Registration failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <FormWrapper>
      <StyledForm onSubmit={handleSubmit} autoComplete="off">
        <Title>Register</Title>

        {message && <Message>{message}</Message>}
        {error && <Message error>{error}</Message>}

        <Input
          placeholder="Name"
          value={form.name}
          autoComplete="off"
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          required
        />

        <Input
          placeholder="Email"
          type="email"
          name="email"
          autoComplete="new-email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          required
        />

        <PasswordWrapper>
          <Input
            type={showPassword ? "text" : "password"}
            autoComplete="off"
            placeholder="Password"
            value={form.password}
            onChange={(e) => {
              const pwd = e.target.value;
              setForm({ ...form, password: pwd });
              setStrength(checkStrength(pwd));
            }}
            required
          />
          <EyeIcon onClick={() => setShowPassword(!showPassword)}>
            {showPassword ? <BsEyeSlashFill size={18} /> : <BsEyeFill size={18} />}
          </EyeIcon>
        </PasswordWrapper>

        {strength && <StrengthText level={strength}>Strength: {strength}</StrengthText>}

        <PasswordWrapper>
          <Input
            type={showConfirm ? "text" : "password"}
            placeholder="Confirm Password"
            value={confirmPassword}
            autoComplete="off"
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
          <EyeIcon onClick={() => setShowConfirm(!showConfirm)}>
            {showConfirm ? <BsEyeSlashFill size={18} /> : <BsEyeFill size={18} />}
          </EyeIcon>
        </PasswordWrapper>

        <Button disabled={loading}>
          {loading ? "Please wait..." : "Register"}
        </Button>
      </StyledForm>
    </FormWrapper>
  );
};

export default Register;
