import { products } from '../img'
import Cakes from './Cakes'
function Products(){
    return(
        <>
            <div className="page-banner">
                <h2>Products</h2>
            </div>
            <div className="products-cat-title">
                <h2>Pies</h2>
            </div>
            <article className="pie-text">Our pies come in standard 10-inch deep dish size. Note that prices may be subject to seasonal change. Please ask about our diet-friendly options with no added sugar! </article>
            <br />
            <div className="main-page">
                <div className = "product-grid-container">
                    {products.map((product, i) => {
                        return (
                        <div className="product-card" key={i}>
                            <img src={product.photo} width="95%"/>
                            <p className="product-name">{product.name}</p>
                            <p className="product-price">{product.price}</p>
                        </div>
                        )
                    })}                
                </div>
            </div> 
            <Cakes />
        </>
    )
}


export default Products