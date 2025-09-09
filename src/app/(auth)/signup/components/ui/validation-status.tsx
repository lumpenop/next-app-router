interface ValidationStatusProps {
  isValid: boolean;
  validMessage?: string;
  invalidMessage?: string;
}

export default function ValidationStatus({
  isValid,
  validMessage = "✅ 모든 필드가 유효합니다",
  invalidMessage = "❌ 필수 필드를 모두 입력해주세요",
}: ValidationStatusProps) {
  return (
    <div style={{ marginTop: "20px", color: isValid ? "green" : "gray" }}>
      {isValid ? validMessage : invalidMessage}
    </div>
  );
}
