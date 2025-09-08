import { FullSignupFormData } from "./index";

export const signupDefaultValues: FullSignupFormData = {
  // Account Step
  username: "",
  email: "",
  password: "",
  confirmPassword: "",
  phoneNumber: "",
  // Personal Step
  name: "",
  birthdate: "",
  gender: undefined,
  address: "",
  job: "",
  interests: [],
  // Social Step
  socialAccounts: {
    kakao: { connected: false, username: "" },
    google: { connected: false, username: "" },
    naver: { connected: false, username: "" },
    instagram: { connected: false, username: "" },
  },
  agreeToTerms: false,
  agreeToPrivacy: false,
  agreeToMarketing: false,
};
