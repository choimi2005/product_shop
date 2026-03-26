import mainImage from "../assets/hero.png"
import { Link } from "react-router-dom"


const Main = () =>{

    return(
       <main className="main">
            <h1>컴퓨터 주변 기기 판매</h1>
            <section>
                <p>안녕하세요! 저희는 최신 컴퓨터 주변 기기를 판매하고 있습니다.
                    <div>  
                        <img src={mainImage} alt="Main" srcset="" />
                    </div>
                </p>
            </section>
       </main>

    )
}

export default Main