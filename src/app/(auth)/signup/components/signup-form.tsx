import {
  UseFormRegister,
  FieldErrors,
  UseFormWatch,
  UseFormSetValue,
} from "react-hook-form";
import { FullSignupFormData } from "@/schema/signup";
import AccountStep from "./steps/account-step";
import PersonalStep from "./steps/personal-step";
import SocialStep from "./steps/social-step";

interface SignupFormProps {
  currentStep: number;
  register: UseFormRegister<FullSignupFormData>;
  errors: FieldErrors<FullSignupFormData>;
  watch: UseFormWatch<FullSignupFormData>;
  setValue: UseFormSetValue<FullSignupFormData>;
  buttonStates: {
    canGoBack: boolean;
    canGoNext: boolean;
    isSubmit: boolean;
    isSubmitting: boolean;
  };
  handlers: {
    onNext: () => void;
    onPrevious: () => void;
    onSubmit: (e?: React.FormEvent) => void;
  };
  getCurrentStepValid: () => boolean;
  phoneNumberError?: string | null;
}

export default function SignupForm({
  currentStep,
  register,
  errors,
  watch,
  setValue,
  buttonStates,
  handlers,
  getCurrentStepValid,
  phoneNumberError,
}: SignupFormProps) {
  const { canGoBack, canGoNext, isSubmit, isSubmitting } = buttonStates;
  const { onNext, onPrevious, onSubmit } = handlers;

  return (
    <form onSubmit={onSubmit}>
      {currentStep === 1 && (
        <AccountStep
          register={register}
          errors={errors}
          isValid={getCurrentStepValid()}
          phoneNumberError={phoneNumberError}
        />
      )}
      {currentStep === 2 && (
        <PersonalStep
          register={register}
          errors={errors}
          setValue={setValue}
          watch={watch}
          isValid={getCurrentStepValid()}
        />
      )}
      {currentStep === 3 && (
        <SocialStep
          register={register}
          errors={errors}
          watch={watch}
          setValue={setValue}
          isValid={getCurrentStepValid()}
        />
      )}

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
            <button type="button" onClick={onPrevious} disabled={isSubmitting}>
              이전
            </button>
          )}
        </div>
        <div>
          {canGoNext && (
            <button
              type="button"
              onClick={onNext}
              disabled={isSubmitting || !getCurrentStepValid()}
            >
              다음
            </button>
          )}
          {isSubmit && (
            <button
              type="submit"
              disabled={isSubmitting || !getCurrentStepValid()}
            >
              {isSubmitting ? "가입 중..." : "가입 완료"}
            </button>
          )}
        </div>
      </div>
    </form>
  );
}
