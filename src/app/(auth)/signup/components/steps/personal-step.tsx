import {
  UseFormRegister,
  FieldErrors,
  UseFormSetValue,
  UseFormWatch,
} from "react-hook-form";
import { FullSignupFormData } from "@/schema/signup";

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
    <div style={{ padding: "20px" }}>
      <h2>개인 정보</h2>

      <div style={{ marginBottom: "15px" }}>
        <label htmlFor="name">이름</label>
        <input
          id="name"
          type="text"
          autoComplete="name"
          {...register("name")}
          style={{
            width: "100%",
            padding: "8px",
            border: errors.name ? "1px solid red" : "1px solid #ccc",
          }}
        />
        {errors.name && (
          <span style={{ color: "red", fontSize: "12px" }}>
            {errors.name.message}
          </span>
        )}
      </div>

      <div style={{ marginBottom: "15px" }}>
        <label htmlFor="birthdate">생년월일</label>
        <input
          id="birthdate"
          type="date"
          autoComplete="bday"
          {...register("birthdate")}
          style={{
            width: "100%",
            padding: "8px",
            border: errors.birthdate ? "1px solid red" : "1px solid #ccc",
          }}
        />
        {errors.birthdate && (
          <span style={{ color: "red", fontSize: "12px" }}>
            {errors.birthdate.message}
          </span>
        )}
      </div>

      <div style={{ marginBottom: "15px" }}>
        <label htmlFor="gender">성별</label>
        <select
          id="gender"
          {...register("gender")}
          style={{
            width: "100%",
            padding: "8px",
            border: errors.gender ? "1px solid red" : "1px solid #ccc",
          }}
        >
          <option value="">성별을 선택해주세요</option>
          <option value="male">남성</option>
          <option value="female">여성</option>
          <option value="other">기타</option>
        </select>
        {errors.gender && (
          <span style={{ color: "red", fontSize: "12px" }}>
            {errors.gender.message}
          </span>
        )}
      </div>

      <div style={{ marginBottom: "15px" }}>
        <label htmlFor="address">주소</label>
        <input
          id="address"
          type="text"
          autoComplete="address-line1"
          {...register("address")}
          style={{
            width: "100%",
            padding: "8px",
            border: errors.address ? "1px solid red" : "1px solid #ccc",
          }}
        />
        {errors.address && (
          <span style={{ color: "red", fontSize: "12px" }}>
            {errors.address.message}
          </span>
        )}
      </div>

      <div style={{ marginBottom: "15px" }}>
        <label htmlFor="job">직업</label>
        <input
          id="job"
          type="text"
          autoComplete="organization-title"
          {...register("job")}
          style={{
            width: "100%",
            padding: "8px",
            border: errors.job ? "1px solid red" : "1px solid #ccc",
          }}
        />
        {errors.job && (
          <span style={{ color: "red", fontSize: "12px" }}>
            {errors.job.message}
          </span>
        )}
      </div>

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
            <label
              key={interest}
              style={{ display: "block", marginBottom: "5px" }}
            >
              <input
                type="checkbox"
                value={interest}
                checked={watch("interests")?.includes(interest) || false}
                onChange={(e) => {
                  const currentInterests = watch("interests") || [];
                  if (e.target.checked) {
                    setValue("interests", [...currentInterests, interest]);
                  } else {
                    setValue(
                      "interests",
                      currentInterests.filter((i: string) => i !== interest)
                    );
                  }
                }}
                style={{ marginRight: "8px" }}
              />
              {interest}
            </label>
          ))}
        </div>
        {errors.interests && (
          <span style={{ color: "red", fontSize: "12px" }}>
            {errors.interests.message}
          </span>
        )}
      </div>

      <div style={{ marginTop: "20px", color: isValid ? "green" : "gray" }}>
        {isValid
          ? "✅ 모든 필드가 유효합니다"
          : "❌ 필수 필드를 모두 입력해주세요"}
      </div>
    </div>
  );
}

export default PersonalStep;
