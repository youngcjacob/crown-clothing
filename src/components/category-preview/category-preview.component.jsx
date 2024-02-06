import {CategoryPreviewContainer} from "./category-preview.styles.jsx"
import ProductCard from "../product-card/product-card.component"
import { Link } from 'react-router-dom';
import { Fragment } from "react";

const CategoryPreview = ({ title, products }) => {

    return (
        <CategoryPreviewContainer>
        
            <h2>
                <Link className="title" to={`/shop/${title}`}>
                     {title.toUpperCase()} 
                </Link>
            </h2>
            <div className="preview">
                {
                    products.filter((_, idx) => idx < 4)
                        .map((product) => <ProductCard key={product.id} product={product} />)

                }

            </div>

            </CategoryPreviewContainer>
    )


}

export default CategoryPreview