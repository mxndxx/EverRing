import AuthPageContainer from "@features/auth/components/AuthPageContainer";
import SignupForm from "@features/auth/components/SignupForm";

export default function Signup() {
  return (
    <AuthPageContainer
      title="회원가입"
      description="이미 회원이신가요?"
      linkText="로그인"
    >
      <SignupForm />
    </AuthPageContainer>
  );
}
