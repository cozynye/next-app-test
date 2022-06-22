import { useRouter } from "next/router";
import { Menu } from "semantic-ui-react";

export default function Gnb() {
  let activeItem;
  const router = useRouter();

  if (router.pathname === "/") {
    activeItem = "home";
  } else if (router.pathname === "/about") {
    activeItem = "about";
  } else if (router.pathname === "/admin") {
    activeItem = "admin";
  }

  const goLink = (e, data) => {
    if (data.name === "home") {
      router.push("/");
    } else if (data.name === "about") {
      router.push("/about");
    } else if (data.name === "admin") {
      router.push("/admin");
    }
  };
  return (
    <Menu secondary>
      <Menu.Item name="home" active={activeItem === "home"} onClick={goLink} />
      <Menu.Item
        name="messages"
        active={activeItem === "messages"}
        onClick={goLink}
      />
      <Menu.Item
        name="friends"
        active={activeItem === "friends"}
        onClick={goLink}
      />
      <Menu.Item
        name="admin"
        active={activeItem === "admin"}
        onClick={goLink}
      />
    </Menu>
  );
}
