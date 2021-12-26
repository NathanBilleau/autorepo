import { Outlet, useNavigate } from "remix";
import Button from "~/components/button";

export default function Index() {
  const navigate = useNavigate()

  const login = () => {
    console.log('login')
    navigate('/repositories')
  }

  return (
    <div>
      <h1>Autorepo</h1>
      <Button color="primary" onClick={login} text="login with github" />
    </div>
  );
}
