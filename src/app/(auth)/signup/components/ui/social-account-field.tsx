import { UseFormRegister, FieldError } from "react-hook-form";
import { FullSignupFormData } from "@/schema/signup";

interface SocialAccountFieldProps {
  platform: string;
  isConnected: boolean;
  register: UseFormRegister<FullSignupFormData>;
  error?: FieldError;
}

export default function SocialAccountField({
  platform,
  isConnected,
  register,
  error,
}: SocialAccountFieldProps) {
  const platformNames: Record<string, string> = {
    kakao: "카카오",
    google: "구글", 
    naver: "네이버",
    instagram: "인스타그램",
  };

  return (
    <div
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
        {platformNames[platform]}
      </label>
      {isConnected && (
        <input
          type="text"
          autoComplete="username"
          placeholder="아이디"
          {...register(`socialAccounts.${platform}.username` as any)}
          style={{
            padding: "4px 8px",
            border: error ? "1px solid red" : "1px solid #ccc",
            borderRadius: "4px",
          }}
        />
      )}
      {error && (
        <span style={{ color: "red", fontSize: "12px" }}>
          {error.message}
        </span>
      )}
    </div>
  );
}
