interface StepNavigationProps {
  canGoBack: boolean;
  canGoNext: boolean;
  isSubmit: boolean;
  isSubmitting: boolean;
  isValid: boolean;
  onPrevious: () => void;
  onNext: () => void;
  onSubmit: (e?: React.FormEvent) => void;
}

export default function StepNavigation({
  canGoBack,
  canGoNext,
  isSubmit,
  isSubmitting,
  isValid,
  onPrevious,
  onNext,
  onSubmit,
}: StepNavigationProps) {
  return (
    <div
      style={{
        marginTop: "20px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <div>
        {canGoBack && (
          <button 
            type="button" 
            onClick={onPrevious} 
            disabled={isSubmitting}
            style={{
              padding: "8px 16px",
              backgroundColor: "#f5f5f5",
              border: "1px solid #ccc",
              borderRadius: "4px",
              cursor: isSubmitting ? "not-allowed" : "pointer",
            }}
          >
            이전
          </button>
        )}
      </div>
      <div>
        {canGoNext && (
          <button
            type="button"
            onClick={onNext}
            disabled={isSubmitting || !isValid}
            style={{
              padding: "8px 16px",
              backgroundColor: isValid && !isSubmitting ? "#007bff" : "#f5f5f5",
              color: isValid && !isSubmitting ? "white" : "#666",
              border: "1px solid #ccc",
              borderRadius: "4px",
              cursor: isValid && !isSubmitting ? "pointer" : "not-allowed",
            }}
          >
            다음
          </button>
        )}
        {isSubmit && (
          <button
            type="submit"
            disabled={isSubmitting || !isValid}
            onClick={onSubmit}
            style={{
              padding: "8px 16px",
              backgroundColor: isValid && !isSubmitting ? "#28a745" : "#f5f5f5",
              color: isValid && !isSubmitting ? "white" : "#666",
              border: "1px solid #ccc",
              borderRadius: "4px",
              cursor: isValid && !isSubmitting ? "pointer" : "not-allowed",
            }}
          >
            {isSubmitting ? "가입 중..." : "가입 완료"}
          </button>
        )}
      </div>
    </div>
  );
}
