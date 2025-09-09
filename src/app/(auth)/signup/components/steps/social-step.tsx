import {
  UseFormRegister,
  FieldErrors,
  UseFormWatch,
  UseFormSetValue,
} from "react-hook-form";
import { FullSignupFormData } from "@/schema/signup";
import ValidationStatus from "../ui/validation-status";
import SocialAccountField from "../ui/social-account-field";
import CheckboxField from "../ui/checkbox-field";

interface SocialStepProps {
  register: UseFormRegister<FullSignupFormData>;
  errors: FieldErrors<FullSignupFormData>;
  watch: UseFormWatch<FullSignupFormData>;
  setValue: UseFormSetValue<FullSignupFormData>;
  isValid: boolean;
}

function SocialStep({
  register,
  errors,
  watch,
  setValue,
  isValid,
}: SocialStepProps) {
  return (
    <div>
      <h2 style={{ fontWeight: "bold", fontSize: "24px", marginBottom: "20px" }}>소셜 계정 연결</h2>

      <div style={{ marginBottom: "20px" }}>
        <h3>소셜 계정 연결 (선택사항)</h3>

        {["kakao", "google", "naver", "instagram"].map((platform) => (
          <SocialAccountField
            key={platform}
            platform={platform}
            isConnected={watch(`socialAccounts.${platform}.connected` as any) || false}
            register={register}
            error={errors.socialAccounts?.[platform as keyof typeof errors.socialAccounts] as any}
          />
        ))}
      </div>

      <div style={{ marginBottom: "20px" }}>
        <h3>약관 동의</h3>

        <CheckboxField
          id="agreeToTerms"
          label="서비스 이용약관에 동의합니다 (필수)"
          checked={watch("agreeToTerms") || false}
          onChange={(checked) => setValue("agreeToTerms", checked)}
          error={errors.agreeToTerms}
          required
        />

        <CheckboxField
          id="agreeToPrivacy"
          label="개인정보 처리방침에 동의합니다 (필수)"
          checked={watch("agreeToPrivacy") || false}
          onChange={(checked) => setValue("agreeToPrivacy", checked)}
          error={errors.agreeToPrivacy}
          required
        />

        <CheckboxField
          id="agreeToMarketing"
          label="마케팅 정보 수신에 동의합니다 (선택)"
          checked={watch("agreeToMarketing") || false}
          onChange={(checked) => setValue("agreeToMarketing", checked)}
        />
      </div>

      <ValidationStatus 
        isValid={isValid} 
        validMessage="✅ 모든 필수 항목에 동의했습니다"
        invalidMessage="❌ 필수 약관에 동의해주세요"
      />
    </div>
  );
}

export default SocialStep;
