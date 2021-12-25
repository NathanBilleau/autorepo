import Button from "~/components/button";

export default function Index() {

  const login = () => {

  }

  return (
    <div>
      <h1>Autorepo</h1>
      <Button color="primary" onClick={login} text="login with github" shortcut="cmd + c" />
    </div>
  );
}
