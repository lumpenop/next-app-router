import { UseFormRegister, FieldErrors } from "react-hook-form";
import { FullSignupFormData } from "@/schema/signup";

interface AccountStepProps {
  register: UseFormRegister<FullSignupFormData>;
  errors: FieldErrors<FullSignupFormData>;
  isValid: boolean;
  phoneNumberError?: string | null;
}

function AccountStep({
  register,
  errors,
  isValid,
  phoneNumberError,
}: AccountStepProps) {
  return (
    <div style={{ padding: "20px" }}>
      <h2>계정 정보</h2>

      <div style={{ marginBottom: "15px" }}>
        <label htmlFor="username">아이디</label>
        <input
          id="username"
          type="text"
          autoComplete="username"
          {...register("username")}
          style={{
            width: "100%",
            padding: "8px",
            border: errors.username ? "1px solid red" : "1px solid #ccc",
          }}
        />
        {errors.username && (
          <span style={{ color: "red", fontSize: "12px" }}>
            {errors.username.message}
          </span>
        )}
      </div>

      <div style={{ marginBottom: "15px" }}>
        <label htmlFor="email">이메일</label>
        <input
          id="email"
          type="email"
          autoComplete="email"
          {...register("email")}
          style={{
            width: "100%",
            padding: "8px",
            border: errors.email ? "1px solid red" : "1px solid #ccc",
          }}
        />
        {errors.email && (
          <span style={{ color: "red", fontSize: "12px" }}>
            {errors.email.message}
          </span>
        )}
      </div>

      <div style={{ marginBottom: "15px" }}>
        <label htmlFor="password">비밀번호</label>
        <input
          id="password"
          type="password"
          autoComplete="new-password"
          {...register("password")}
          style={{
            width: "100%",
            padding: "8px",
            border: errors.password ? "1px solid red" : "1px solid #ccc",
          }}
        />
        {errors.password && (
          <span style={{ color: "red", fontSize: "12px" }}>
            {errors.password.message}
          </span>
        )}
      </div>

      <div style={{ marginBottom: "15px" }}>
        <label htmlFor="confirmPassword">비밀번호 확인</label>
        <input
          id="confirmPassword"
          type="password"
          autoComplete="new-password"
          {...register("confirmPassword")}
          style={{
            width: "100%",
            padding: "8px",
            border: errors.confirmPassword ? "1px solid red" : "1px solid #ccc",
          }}
        />
        {errors.confirmPassword && (
          <span style={{ color: "red", fontSize: "12px" }}>
            {errors.confirmPassword.message}
          </span>
        )}
      </div>

      <div style={{ marginBottom: "15px" }}>
        <label htmlFor="phoneNumber">전화번호</label>
        <input
          id="phoneNumber"
          type="tel"
          autoComplete="tel"
          placeholder="010-1234-5678"
          {...register("phoneNumber")}
          style={{
            width: "100%",
            padding: "8px",
            border:
              errors.phoneNumber || phoneNumberError
                ? "1px solid red"
                : "1px solid #ccc",
          }}
        />
        {(errors.phoneNumber || phoneNumberError) && (
          <span style={{ color: "red", fontSize: "12px" }}>
            {errors.phoneNumber?.message || phoneNumberError}
          </span>
        )}
      </div>

      <div style={{ marginTop: "20px", color: isValid ? "green" : "gray" }}>
        {isValid
          ? "✅ 모든 필드가 유효합니다"
          : "❌ 필수 필드를 모두 입력해주세요"}
      </div>
    </div>
  );
}

export default AccountStep;
