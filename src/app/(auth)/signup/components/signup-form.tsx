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
import StepNavigation from "./ui/step-navigation";

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
    <div style={{ maxWidth: "650px", margin: "0 auto", padding: "20px" }}>
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

        <StepNavigation
          canGoBack={canGoBack}
          canGoNext={canGoNext}
          isSubmit={isSubmit}
          isSubmitting={isSubmitting}
          isValid={getCurrentStepValid()}
          onPrevious={onPrevious}
          onNext={onNext}
          onSubmit={onSubmit}
        />
      </form>
    </div>
  );
}
