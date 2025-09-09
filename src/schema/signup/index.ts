import { z } from "zod";

import { stepAccountSchema, StepAccountFormData } from "./step-account";
import { stepPersonalSchema, StepPersonalFormData } from "./step-personal";
import { stepSocialSchema, StepSocialFormData } from "./step-social";

export const fullSignupSchema = stepAccountSchema
  .and(stepPersonalSchema)
  .and(stepSocialSchema);
export type FullSignupFormData = z.infer<typeof fullSignupSchema>;

export { stepAccountSchema, stepPersonalSchema, stepSocialSchema };
export type { StepAccountFormData, StepPersonalFormData, StepSocialFormData };

export { signupDefaultValues } from "../../config/default-values";
