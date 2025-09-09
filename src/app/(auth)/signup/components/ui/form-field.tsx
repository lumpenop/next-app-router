import { UseFormRegister, FieldError } from "react-hook-form";
import { FullSignupFormData } from "@/schema/signup";

interface FormFieldProps {
  id: string;
  label: string;
  type?: string;
  placeholder?: string;
  autoComplete?: string;
  maxLength?: number;
  register: UseFormRegister<FullSignupFormData>;
  fieldName: keyof FullSignupFormData;
  error?: FieldError;
  customError?: string | null;
  required?: boolean;
}

export default function FormField({
  id,
  label,
  type = "text",
  placeholder,
  autoComplete,
  maxLength,
  register,
  fieldName,
  error,
  customError,
  required = false,
}: FormFieldProps) {
  const hasError = error || customError;
  const errorMessage = error?.message || customError;

  return (
    <div style={{ marginBottom: "15px" }}>
      <label htmlFor={id}>
        {label}
        {required && <span style={{ color: "red" }}> *</span>}
      </label>
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        autoComplete={autoComplete}
        maxLength={maxLength}
        {...register(fieldName)}
        style={{
          width: "100%",
          padding: "8px",
          border: hasError ? "1px solid red" : "1px solid #ccc",
          borderRadius: "4px",
        }}
      />
      {hasError && (
        <span style={{ color: "red", fontSize: "12px", display: "block", marginTop: "4px" }}>
          {errorMessage}
        </span>
      )}
    </div>
  );
}
