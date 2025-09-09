import { UseFormRegister, FieldErrors } from "react-hook-form";
import { FullSignupFormData } from "@/schema/signup";
import FormField from "../ui/form-field";
import ValidationStatus from "../ui/validation-status";

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
    <div>
      <h2 style={{ fontWeight: "bold", fontSize: "24px", marginBottom: "20px" }}>계정 정보</h2>

      <FormField
        id="username"
        label="아이디"
        type="text"
        autoComplete="username"
        maxLength={20}
        register={register}
        fieldName="username"
        error={errors.username}
        required
      />

      <FormField
        id="email"
        label="이메일"
        type="email"
        autoComplete="email"
        maxLength={100}
        register={register}
        fieldName="email"
        error={errors.email}
        required
      />

      <FormField
        id="password"
        label="비밀번호"
        type="password"
        autoComplete="new-password"
        maxLength={50}
        register={register}
        fieldName="password"
        error={errors.password}
        required
      />
      <FormField
        id="confirmPassword"
        label="비밀번호 확인"
        type="password"
        autoComplete="new-password"
        maxLength={50}
        register={register}
        fieldName="confirmPassword"
        error={errors.confirmPassword}
        required
      />
      <FormField
        id="phoneNumber"
        label="전화번호"
        type="tel"
        placeholder="010-XXXX-XXXX"
        autoComplete="tel"
        maxLength={13}
        register={register}
        fieldName="phoneNumber"
        customError={phoneNumberError}
        required
      />
      <ValidationStatus isValid={isValid} />
    </div>
  );
}

export default AccountStep;
