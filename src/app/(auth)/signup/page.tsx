"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import {
  fullSignupSchema,
  FullSignupFormData,
  signupDefaultValues,
} from "@/schema/signup";
import SignupForm from "./components/signup-form";

export default function MultiStepSignup() {
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    setValue,
    getValues,
  } = useForm<FullSignupFormData>({
    resolver: zodResolver(fullSignupSchema),
    mode: "onBlur",
    defaultValues: signupDefaultValues,
  });

  const phoneNumber = watch("phoneNumber");

  // watch로 실시간 유효성 검사
  const isPhoneNumberValid =
    phoneNumber && /^01[0-9]-\d{3,4}-\d{4}$/.test(phoneNumber);

  const onNext = () => {
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1);
    }
  };

  const onPrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const onSubmit = async (data: FullSignupFormData) => {
    setIsSubmitting(true);
    try {
      console.log("Final Signup Data:", data);
      await new Promise((resolve) => setTimeout(resolve, 2000));
      alert("회원가입이 완료되었습니다!");
    } catch (error) {
      console.error("Signup error:", error);
      alert("회원가입 중 오류가 발생했습니다.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const getCurrentStepValid = (): boolean => {
    const values = getValues();

    switch (currentStep) {
      case 1:
        return !!(
          values.username &&
          values.email &&
          values.password &&
          values.confirmPassword &&
          isPhoneNumberValid &&
          !errors.username &&
          !errors.email &&
          !errors.password &&
          !errors.confirmPassword
        );
      case 2:
        return !!(
          values.name &&
          values.birthdate &&
          values.gender &&
          values.address &&
          values.job &&
          values.interests?.length
        );
      case 3:
        return !!(values.agreeToTerms && values.agreeToPrivacy);
      default:
        return false;
    }
  };

  const buttonStates = {
    canGoBack: currentStep > 1,
    canGoNext: currentStep < 3,
    isSubmit: currentStep === 3,
    isSubmitting,
  };

  const handlers = {
    onNext,
    onPrevious,
    onSubmit: handleSubmit(onSubmit),
  };

  return (
    <SignupForm
      currentStep={currentStep}
      register={register}
      errors={errors}
      watch={watch}
      setValue={setValue}
      buttonStates={buttonStates}
      handlers={handlers}
      getCurrentStepValid={getCurrentStepValid}
      phoneNumberError={
        phoneNumber && !isPhoneNumberValid
          ? "올바른 전화번호 형식이 아닙니다. (예: 010-1234-5678)"
          : null
      }
    />
  );
}
