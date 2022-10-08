import { useLogin } from "../../hooks/useLogin";

const Login = () => {
  const { email, password, onChange, disabled } = useLogin();

  const onSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={onSubmit}>
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
      <button type="submit" disabled={disabled}>
        로그인
      </button>
      <button type="submit" disabled={disabled}>
        회원가입
      </button>
    </form>
  );
};

export default Login;
