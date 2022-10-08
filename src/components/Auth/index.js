import { useAuth } from "../../hooks/useAuth";

const Auth = () => {
  const { email, password, onChange, disabled } = useAuth();

  const onSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form>
      <input
        type="email"
        name="email"
        placeholder="이메일을 입력해주세요."
        value={email}
        onChange={onChange}
      />
      <input
        type="password"
        name="password"
        placeholder="비밀번호를 입력해주세요."
        value={password}
        onChange={onChange}
      />
      <button type="button" disabled={disabled}>
        로그인
      </button>
      <button type="button" disabled={disabled}>
        회원가입
      </button>
    </form>
  );
};

export default Auth;
