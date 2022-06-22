import { useEffect } from "react";
import { useRouter } from "next/router";

export default function Admin() {
  console.log("admin");
  const router = useRouter();
  function checkLogin() {
    fetch("/api/isLogin").then((res) => {
      console.log("admin res");
      console.log(res);
      if (res.status === 200) {
        //로그인
      } else {
        //로그인 안됨
        router.push("/login");
      }
    });
  }
  useEffect(() => {
    checkLogin();
  }, []);
  return <>admin</>;
}
