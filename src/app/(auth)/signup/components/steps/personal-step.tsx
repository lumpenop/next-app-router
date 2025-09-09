import {
  UseFormRegister,
  FieldErrors,
  UseFormSetValue,
  UseFormWatch,
} from "react-hook-form";
import { FullSignupFormData } from "@/schema/signup";
import FormField from "../ui/form-field";
import ValidationStatus from "../ui/validation-status";
import CheckboxField from "../ui/checkbox-field";

interface PersonalStepProps {
  register: UseFormRegister<FullSignupFormData>;
  errors: FieldErrors<FullSignupFormData>;
  setValue: UseFormSetValue<FullSignupFormData>;
  watch: UseFormWatch<FullSignupFormData>;
  isValid: boolean;
}

function PersonalStep({
  register,
  errors,
  setValue,
  watch,
  isValid,
}: PersonalStepProps) {
  return (
    <div>
      <h2>개인 정보</h2>

      <FormField
        id="name"
        label="이름"
        type="text"
        autoComplete="name"
        maxLength={20}
        register={register}
        fieldName="name"
        error={errors.name}
        required
      />

      <FormField
        id="birthdate"
        label="생년월일"
        type="date"
        autoComplete="bday"
        maxLength={10}
        register={register}
        fieldName="birthdate"
        error={errors.birthdate}
        required
      />

      <div style={{ marginBottom: "15px" }}>
        <label htmlFor="gender">
          성별<span style={{ color: "red" }}> *</span>
        </label>
        <select
          id="gender"
          {...register("gender")}
          style={{
            width: "100%",
            padding: "8px",
            border: errors.gender ? "1px solid red" : "1px solid #ccc",
            borderRadius: "4px",
          }}
        >
          <option value="">성별을 선택해주세요</option>
          <option value="male">남성</option>
          <option value="female">여성</option>
          <option value="other">기타</option>
        </select>
        {errors.gender && (
          <span style={{ color: "red", fontSize: "12px", display: "block", marginTop: "4px" }}>
            {errors.gender.message}
          </span>
        )}
      </div>

      <FormField
        id="address"
        label="주소"
        type="text"
        autoComplete="address-line1"
        maxLength={100}
        register={register}
        fieldName="address"
        error={errors.address}
        required
      />

      <FormField
        id="job"
        label="직업"
        type="text"
        autoComplete="organization-title"
        maxLength={50}
        register={register}
        fieldName="job"
        error={errors.job}
        required
      />

      <div style={{ marginBottom: "15px" }}>
        <label>관심사 (최소 1개 이상 선택)</label>
        <div style={{ marginTop: "5px" }}>
          {[
            "기술",
            "스포츠",
            "음악",
            "영화",
            "독서",
            "여행",
            "요리",
            "게임",
          ].map((interest) => (
            <CheckboxField
              key={interest}
              id={`interest-${interest}`}
              label={interest}
              value={interest}
              checked={watch("interests")?.includes(interest) || false}
              onChange={(checked) => {
                const currentInterests = watch("interests") || [];
                if (checked) {
                  setValue("interests", [...currentInterests, interest]);
                } else {
                  setValue(
                    "interests",
                    currentInterests.filter((i: string) => i !== interest)
                  );
                }
              }}
            />
          ))}
        </div>
        {errors.interests && (
          <span style={{ color: "red", fontSize: "12px", display: "block", marginTop: "4px" }}>
            {errors.interests.message}
          </span>
        )}
      </div>

      <ValidationStatus isValid={isValid} />
    </div>
  );
}

export default PersonalStep;
