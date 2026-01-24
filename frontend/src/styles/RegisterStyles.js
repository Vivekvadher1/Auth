import styled from "styled-components";

export const FormWrapper = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(135deg, #f5f7fa, #e8ecf3);
  padding: 1rem;
`;

export const StyledForm = styled.form`
  width: 100%;
  max-width: 420px;
  background: ${({ theme }) => theme.colors.bgLight};
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const Title = styled.h2`
  text-align: center;
  color: ${({ theme }) => theme.colors.textMain};
  margin-bottom: 5px;
  font-size: 28px;
`;

export const Input = styled.input`
  width: 100%;
  padding: 10px 45px 10px 12px;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-size: 15px;
  outline: none;
  box-sizing: border-box;

  &:focus {
    border-color: #ff7a18;
  }
`;

export const Button = styled.button`
  padding: 0.75rem;
  background: linear-gradient(135deg, #ff7a18, #ffb347);
  border: none;
  border-radius: 8px;
  color: ${({ theme }) => theme.colors.bgLight};
  font-weight: 600;
  cursor: pointer;
  transition: 0.2s ease;

  &:hover {
    opacity: 0.9;
  }

  &:disabled {
    background: #ccc;
    cursor: not-allowed;
  }
`;

export const Message = styled.p`
  text-align: center;
  font-size: 0.9rem;
  color: ${(props) => (props.error ? "#e74c3c" : "#27ae60")};
`;

export const PasswordWrapper = styled.div`
  position: relative;
  width: 100%;
`;

export const EyeIcon = styled.span`
  position: absolute;
  right: 12px;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
  color: ${({ theme }) => theme.colors.textLight};
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  z-index: 10;
`;

export const StrengthText = styled.p`
  font-size: 0.85rem;
  margin-top: -0.4rem;
  color: ${(props) =>
    props.level === "Strong"
      ? "#27ae60"
      : props.level === "Medium"
        ? "#f39c12"
        : "#f04c39"};
`;

export const RememberRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.85rem;
`;

export const ForgetText = styled.span`
  color: ${({ theme }) => theme.colors.secondary};
  cursor: pointer;
  font-size: 15px;
`;
