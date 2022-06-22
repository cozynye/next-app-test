import { useRouter } from "next/router";
import { Button, Form } from "semantic-ui-react";

export default function Login() {
  const router = useRouter();
  function login() {
    console.log("login.js login function");
    fetch("/api/login").then((res) => {
      console.log("res");
      console.log(res);
      if (res.status === 200) {
        router.push("/admin");
      }
    });
  }
  return (
    <div style={{ padding: "100px 0", textAlign: "center" }}>
      <Form>
        <Form.Field inline>
          <input placeholder="ID" />
        </Form.Field>
        <Form.Field inline>
          <input type="password" placeholder="password" />
        </Form.Field>
        <Button color="blue" onClick={login}>
          Login
        </Button>
      </Form>
    </div>
  );
}
