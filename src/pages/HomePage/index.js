import Auth from "../../components/Auth";
import { useRedirect } from "../../hooks/useRedirect";

const HomePage = () => {
  useRedirect();

  return <Auth />;
};

export default HomePage;
