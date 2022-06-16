import { useRouter } from "next/router"
import Seo from "../../components/Seo";

// 서버사이드 렌더링
export default function Detail({params}){
    const router = useRouter();
    // 서버에서 렌더링되기 때문에 router.query.params가 배열이 아니라 오류가 날 수 있기 때문에 || 연산자 쓴다
    const [title, id] = params || [] ;
    return (
        <div>
            <Seo title={title} />
            <h4>{title}</h4>
        </div>
    )
}


// 클라이언트 렌더링
// export default function Detail(){
//     const router = useRouter();
//     // 서버에서 렌더링되기 때문에 router.query.params가 배열이 아니라 오류가 날 수 있기 때문에 || 연산자 쓴다
//     const [title, id] = router.query.params || [] ;
//     return (
//         <div>
//             <h4>{title}</h4>
//         </div>
//     )
// }

export function getServerSideProps({params:{params}}){
    console.log('params');
    console.log(params);

    return {
        props:{
            params}
            ,
    }
}


// export function getServerSideProps({params}){
//     console.log('params');
//     console.log(params);

//     return {
//         props:{}
//     }
// }

// export function getServerSideProps(ctx){
//     console.log(ctx);

//     return {
//         props:{}
//     }
// }