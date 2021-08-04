import Tabs from './Tabs'

function Products(){

    return(
        <>
            <div className="page-banner">
                <h2>Products</h2>
            </div>
            <div className="main-page">
            <Tabs>
                <div label="Pies"> 
                    <ul>
                        <li>Apple</li>
                        <li>Apple Cranberry</li>
                        <li>Apple Walnut Raisin</li>
                        <li>Banana Cream</li>
                        <li>Blackberry</li>
                        <li>Black Bottom</li>
                        <li>Blueberry</li>
                        <li>Blueberry Lattice</li>
                        <li>Boston Cream</li>
                        <li>Buttermilk</li>
                        <li>Cherry</li>
                        <li>Cherry Cream</li>
                        <li>Chocolate Bourbon Pecan</li>
                        <li>Chocolate Meringue</li>
                        <li>Chocolate Pecan</li>
                        <li>Coconut Chess</li>
                        <li>Coconut Meringue</li>
                        <li>Cranberry Chess</li>
                    </ul>
                    <ul>
                        <li>Dutch Apple</li>
                        <li>Dutch Blueberry</li>
                        <li>Dutch Cherry</li>
                        <li>Egg Custard</li>
                        <li>Lemon Chess</li>
                        <li>Lemon Chess Cranberry</li>
                        <li>Lemon Meringue</li>
                        <li>Macadamia Nut</li>
                        <li>Mixed Berry</li>
                        <li>Mixed Fruit</li>
                        <li>Peach</li>
                        <li>Peanut Butter Chocolate Chip</li>
                        <li>Pecan</li>
                        <li>Pineapple</li>
                        <li>Pineapple Cream</li>
                        <li>Pumpkin</li>
                        <li>Sweet Potato</li>
                    </ul>
                </div> 
                <div label="Cakes"> 
                    <ul>
                        <li>Banana Nut</li>
                        <li>Black Forest</li>
                        <li>Berry Chantilly</li>
                        <li>Cappuccino Mousse</li>
                        <li>Carrot</li>
                        <li>Checkerboard</li>
                        <li>Cherry</li>
                        <li>Chocolate</li>
                        <li>Chocolate Mousse</li>
                        <li>Coconut</li>
                        <li>German Chocolate</li>
                    </ul>
                    <ul>
                        <li>Italian Cream</li>
                        <li>Lemon</li>
                        <li>Mango Mousse</li>
                        <li>Peach</li>
                        <li>Pina Colada</li>
                        <li>Red Velvet</li>
                        <li>Strawberry</li>
                        <li>Strawberry Shortcake</li>
                        <li>Tiramisu</li>
                        <li>White</li>
                        <li>Yellow</li>
                    </ul>
                </div> 
                <div label="Other Desserts"> 
                    <ul>
                        <li>Cupcakes</li>
                        <li>Cookies</li>
                        <li>Tarts</li>
                        <li><em>Ask for more baked goods!</em></li>
                    </ul>
                </div> 
            </Tabs>
            </div>       
        </>
    )
}


export default Products