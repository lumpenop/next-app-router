import { FieldError } from "react-hook-form";

interface CheckboxFieldProps {
  id: string;
  label: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
  error?: FieldError;
  required?: boolean;
  value?: string; // 배열에서 사용할 값
}

export default function CheckboxField({
  id,
  label,
  checked,
  onChange,
  error,
  required = false,
  value,
}: CheckboxFieldProps) {
  return (
    <div style={{ marginBottom: "10px" }}>
      <label style={{ display: "flex", alignItems: "center", gap: "8px" }}>
        <input
          id={id}
          type="checkbox"
          value={value}
          checked={checked}
          onChange={(e) => onChange(e.target.checked)}
          style={{ margin: 0 }}
        />
        <span style={{ color: error ? "red" : "inherit" }}>
          {label}
          {required && <span style={{ color: "red" }}> *</span>}
        </span>
      </label>
      {error && (
        <span
          style={{ color: "red", fontSize: "12px", marginLeft: "24px" }}
        >
          {error.message}
        </span>
      )}
    </div>
  );
}
