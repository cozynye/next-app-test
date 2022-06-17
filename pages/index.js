import { useEffect, useState } from 'react'
import Link from "next/link";
import { useRouter } from "next/router";
import Seo from "../components/Seo";
import ItemList from '../src/component/ItemList';
import { Divider, Header, Loader } from 'semantic-ui-react';

export default function Home() {

  const [list, setList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  console.log(process.env.NEXT_PUBLIC_API_URL)
  console.log('process.env.NEXT_PUBLIC_API_URL')

  async function getData() {
    const data = await (await fetch(process.env.NEXT_PUBLIC_API_URL)).json();
    setList(data);
    setIsLoading(false)
  }

  useEffect(() => {
    getData();

  }, []);

  // 환경변수
  // node js
  // process.env.변수명

  // browser
  // process.env.NEXT_PUBLIC_변수명


  return (
    <div>
      {isLoading && (
        <div style={{ padding: '300px 0' }}>
          <Loader inline="centered" active>
            Loading
          </Loader>

        </div>
      )}
      {!isLoading && (
        <>
          <Header as="h3" style={{ paddingTop: 30 }}>
            베스트 상품
          </Header>
          <Divider />
          <ItemList list={list.slice(0, 9)}></ItemList>
          <Header as="h3" style={{ paddingTop: 30 }}>
            신상품
          </Header>
          <Divider />
          <ItemList list={list.slice(9)}></ItemList>
        </>
      )}

    </div>
  )
}


//create-next-app으로 설치하면
//1. 컴파일과 번들링이 자동으로 된다(webpack 과 babel)
//2. 자동 리프레쉬 기능으로 수정하면 화면에 바로 반영
// 3. 서버사이드 렌더링 지원
// 4. 스태틱 파일을 지원