import { z } from "zod";

export const stepAccountSchema = z
  .object({
    username: z
      .string()
      .min(3, "아이디는 3자 이상이어야 합니다.")
      .max(20, "아이디는 20자 이하여야 합니다.")
      .regex(
        /^[a-zA-Z0-9_]+$/,
        "아이디는 영문, 숫자, 언더스코어만 사용 가능합니다."
      ),
    email: z
      .string()
      .min(1, "이메일은 필수입니다.")
      .regex(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, "올바른 이메일 형식이 아닙니다."),
    password: z
      .string()
      .min(8, "비밀번호는 8자 이상이어야 합니다.")
      .regex(
        /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]/,
        "비밀번호는 영문, 숫자, 특수문자를 포함해야 합니다."
      ),
    confirmPassword: z
      .string()
      .min(8, "비밀번호 확인은 8자 이상이어야 합니다."),
    phoneNumber: z
      .string()
      .min(1, "전화번호는 필수입니다.")
      .regex(
        /^01[0-9]-\d{3,4}-\d{4}$/,
        "올바른 전화번호 형식이 아닙니다. (예: 010-1234-5678)"
      ),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "비밀번호가 일치하지 않습니다.",
    path: ["confirmPassword"],
  });

export type StepAccountFormData = z.infer<typeof stepAccountSchema>;
