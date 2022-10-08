import { useAuth } from "../../hooks/useAuth";

const Auth = () => {
  const { email, password, disabled, onChangeInput, onClickButton } = useAuth();

  return (
    <form>
      <input
        type="email"
        name="email"
        placeholder="이메일을 입력해주세요."
        value={email}
        onChange={onChangeInput}
      />
      <input
        type="password"
        name="password"
        placeholder="비밀번호를 입력해주세요."
        value={password}
        onChange={onChangeInput}
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
