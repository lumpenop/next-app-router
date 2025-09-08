import { z } from "zod";

export const stepSocialSchema = z.object({
  socialAccounts: z.object({
    kakao: z.object({
      connected: z.boolean(),
      username: z.string().optional(),
    }),
    google: z.object({
      connected: z.boolean(),
      username: z.string().optional(),
    }),
    naver: z.object({
      connected: z.boolean(),
      username: z.string().optional(),
    }),
    instagram: z.object({
      connected: z.boolean(),
      username: z.string().optional(),
    }),
  }),
  agreeToTerms: z.boolean().refine((val) => val === true, {
    message: "약관에 동의해야 합니다.",
  }),
  agreeToPrivacy: z.boolean().refine((val) => val === true, {
    message: "개인정보 처리방침에 동의해야 합니다.",
  }),
  agreeToMarketing: z.boolean().optional(),
});

export type StepSocialFormData = z.infer<typeof stepSocialSchema>;
