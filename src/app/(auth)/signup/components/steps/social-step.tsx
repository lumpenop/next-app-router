import {
  UseFormRegister,
  FieldErrors,
  UseFormWatch,
  UseFormSetValue,
} from "react-hook-form";
import { FullSignupFormData } from "@/schema/signup";

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
    <div style={{ padding: "20px" }}>
      <h2>소셜 계정 연결</h2>

      <div style={{ marginBottom: "20px" }}>
        <h3>소셜 계정 연결 (선택사항)</h3>

        {["kakao", "google", "naver", "instagram"].map((platform) => (
          <div
            key={platform}
            style={{
              marginBottom: "15px",
              display: "flex",
              alignItems: "center",
              gap: "10px",
            }}
          >
            <input
              type="checkbox"
              {...register(`socialAccounts.${platform}.connected` as any)}
            />
            <label style={{ textTransform: "capitalize", minWidth: "80px" }}>
              {platform === "kakao"
                ? "카카오"
                : platform === "google"
                ? "구글"
                : platform === "naver"
                ? "네이버"
                : "인스타그램"}
            </label>
            {watch(`socialAccounts.${platform}.connected` as any) && (
              <input
                type="text"
                autoComplete="username"
                placeholder="아이디"
                {...register(`socialAccounts.${platform}.username` as any)}
                style={{
                  padding: "4px 8px",
                  border: "1px solid #ccc",
                  borderRadius: "4px",
                }}
              />
            )}
          </div>
        ))}
      </div>

      <div style={{ marginBottom: "20px" }}>
        <h3>약관 동의</h3>

        <div style={{ marginBottom: "10px" }}>
          <label style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <input
              type="checkbox"
              checked={watch("agreeToTerms") || false}
              onChange={(e) => setValue("agreeToTerms", e.target.checked)}
              style={{ margin: 0 }}
            />
            <span style={{ color: errors.agreeToTerms ? "red" : "inherit" }}>
              서비스 이용약관에 동의합니다 (필수)
            </span>
          </label>
          {errors.agreeToTerms && (
            <span
              style={{ color: "red", fontSize: "12px", marginLeft: "24px" }}
            >
              {errors.agreeToTerms.message}
            </span>
          )}
        </div>

        <div style={{ marginBottom: "10px" }}>
          <label style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <input
              type="checkbox"
              checked={watch("agreeToPrivacy") || false}
              onChange={(e) => setValue("agreeToPrivacy", e.target.checked)}
              style={{ margin: 0 }}
            />
            <span style={{ color: errors.agreeToPrivacy ? "red" : "inherit" }}>
              개인정보 처리방침에 동의합니다 (필수)
            </span>
          </label>
          {errors.agreeToPrivacy && (
            <span
              style={{ color: "red", fontSize: "12px", marginLeft: "24px" }}
            >
              {errors.agreeToPrivacy.message}
            </span>
          )}
        </div>

        <div style={{ marginBottom: "10px" }}>
          <label style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <input
              type="checkbox"
              checked={watch("agreeToMarketing") || false}
              onChange={(e) => setValue("agreeToMarketing", e.target.checked)}
              style={{ margin: 0 }}
            />
            <span>마케팅 정보 수신에 동의합니다 (선택)</span>
          </label>
        </div>
      </div>

      <div style={{ marginTop: "20px", color: isValid ? "green" : "gray" }}>
        {isValid
          ? "✅ 모든 필수 항목에 동의했습니다"
          : "❌ 필수 약관에 동의해주세요"}
      </div>
    </div>
  );
}

export default SocialStep;
