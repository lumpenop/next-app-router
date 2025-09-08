import { z } from "zod";

export const stepPersonalSchema = z.object({
  name: z.string().min(1, "이름은 필수입니다."),
  birthdate: z
    .string()
    .min(1, "생년월일은 필수입니다.")
    .regex(
      /^\d{4}[.-]\d{1,2}[.-]\d{1,2}[.]?$/,
      "올바른 생년월일 형식이 아닙니다. (예: 1990-01-01 또는 1990.01.01)"
    ),
  gender: z.enum(["male", "female", "other"], {
    message: "성별을 선택해주세요.",
  }),
  address: z.string().min(1, "주소는 필수입니다."),
  job: z.string().min(1, "직업은 필수입니다."),
  interests: z.array(z.string()).min(1, "관심사는 최소 1개 이상 선택해주세요."),
});

export type StepPersonalFormData = z.infer<typeof stepPersonalSchema>;
