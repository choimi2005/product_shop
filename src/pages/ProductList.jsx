import { Link } from "react-router-dom"
import {products} from '../data/products'

//객체 배열


const ProductList = () =>{

    return(

        <section className="product-list">
                <h1>상품 목록</h1>

                <ul>
                    {products.map((products) => (
                            <div key={products.id}>
                                <h3>
                                    <Link to={`/products/${products.id}`}>
                                    {products.name}
                                    </Link>

                                </h3>
                                <p>가격: {products.price}</p>
                                <p>설명: {products.description}</p>
                            </div>
                        )


                    )}

                </ul>

        </section>
           

    )
}

export default ProductList