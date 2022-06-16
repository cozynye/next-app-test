import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
    return (
        <Html lang='ko'>
            <Head />
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}

// _app은 서버로 요청이 들어왔을 때 가장 먼저 실행되는 컴포넌트로, 페이지에 적용할 공통 레이아웃의 역할을 합니다.
// _document는 _app 다음에 실행되며, 공통적으로 활용할 < head > (Ex.메타 태그) 나 < body > 태그 안에 들어갈 내용들을 
// 커스텀할때 활용합니다.