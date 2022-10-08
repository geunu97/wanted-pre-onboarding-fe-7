import { useAuth } from "../../hooks/useAuth";

const Auth = () => {
  const { email, password, disabled, onClickButton } = useAuth();

  return (
    <form>
      <input
        type="email"
        placeholder="이메일을 입력해주세요."
        value={email.value}
        onChange={email.onChangeInput}
      />
      <input
        type="password"
        placeholder="비밀번호를 입력해주세요."
        value={password.value}
        onChange={password.onChangeInput}
      />
      <button
        type="button"
        name="login"
        disabled={disabled}
        onClick={onClickButton}
      >
        로그인
      </button>
      <button
        type="button"
        name="register"
        disabled={disabled}
        onClick={onClickButton}
      >
        회원가입
      </button>
    </form>
  );
};

export default Auth;
