import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Item from "../../src/component/Item";

export default function Post({ item, name }) {
  // const router = useRouter();
  // const { id } = router.query;
  // const [item, setItem] = useState([])
  // async function getData() {

  //     setItem(data)
  // }

  // useEffect(() => {
  //     if (id && id > 0) {
  //         getData();
  //     }

  // }, [id]);
  console.log(process.env.name);
  return (
    <div>
      <Head>
        <title>{item.name}</title>
        <meta name="description" content={item.description} />
      </Head>
      {/* <Item item={item} /> */}
      {name} 환경입니다
      {Item && <Item item={item} />}
    </div>
  );
}

// 서버에서 동작
export async function getServerSideProps(ctx) {
  console.log("asdf");
  const id = ctx.query.id;
  const data = await (
    await fetch(`http://makeup-api.herokuapp.com/api/v1/products/${id}.json`)
  ).json();
  // const data = await (await fetch(`http://makeup-api.herokuapp.com/api/v1/products/${id}.json`)).json();
  console.log(data);
  return {
    props: {
      item: data,
      name: process.env.name,
    },
  };
}
