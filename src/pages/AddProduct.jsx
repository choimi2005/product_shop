
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const AddProduct = () => {

    // 통합객체로 선연
const[formData, setFormData] = useState({
    name: "",
    price: 0,
    description: "",
})
    // 입력값 변경 

    const handleChange = (e) => {
        const {name, value} = e.target
        setFormData({
            ...formData,
            [name]: value // 변경된 값만 업데이트
        })
    }

    // 페이지 이동을 위한 훅
    const navigate = useNavigate();

    // 폼 제출
    const handleSubmit = (e) => {
        e.preventDefault();
        // 새로고침 방지
        console.log("상품추가:" , formData);

        //입력값 검증
        if(!formData.name.trim()|| !formData.price.trim()  || !formData.description.trim()){
            alert("모든 필드를 입력하세요\\\\");
            return; // 즉시종료
        }

        //가격검증
        if(isNaN(formData.price) || Number(formData.price) <= 0){
            alert("유효한 가격을 입력하세요");
            return;
        }
        console.log("상품이 등록되었습니다.:", formData);
        alert("상품이 등록되었습니다.");
        
        navigate('/products') //상품목록 페이지로 이동

    }
    return(
      
        <section className="add-product">
            <h2>상품 등록</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">상품명</label>
                
                <div>
                <input type="text" 
                        placeholder="상품명을 입력하세요" 
                        id="name" name="name" 
                        value={formData.name} 
                        onChange={handleChange} />

                </div>
                <label htmlFor="price">가격</label>
                <div>
                    <input 
                        type="number" 
                        placeholder="가격을 입력하세요" 
                        min={1}
                        name="price" 
                        value={formData.price} 
                        onChange={handleChange} />
                </div>
                <label htmlFor="description">설명</label>
                <div>
                    <textarea 
                        placeholder="상품 설명을 입력하세요" 
                        rows={5}
                        cols={30}
                        id="description" name="description" 
                        value={formData.description} 
                        onChange={handleChange} />
                </div>
                
                <button type="submit">상품 등록</button>
              
            </form>
        </section>

        )
    }

  

  export default AddProduct