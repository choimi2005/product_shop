import { Link, useParams } from "react-router-dom"
import {products} from '../data/products'
//객체 배열



const ProductInfo = () =>{
    
    //URL 파라미터에서 id값을 추출
    // 모듈을 쪼개서 분리해서 관리하는 느낌인데
    // 호출방법 문법을 모르니 뭐가 어떻게 돌아가는지 모르겠음
    
    const {id} = useParams()
    // productss/1 -> "1" 문자 정수로 형변환: parseInt(문자), Number 
    // id로 데이터를검색 - find 함수 
    const product = products.find((p) => p.id === parseInt(id))
    console.log("검색한 상품:", product)


    return(

        <section className="product-info">
            <h1>상품 정보</h1>
            <p>상품 ID: {id}</p>
            <p>상품명: {product.name}</p>
            <p>상품 가격: {product.price}</p>
            <p>상품 설명: {product.description}</p>
        </section>           

    )
}

export default ProductInfo