import { useRef } from 'react';
import { CategoryList } from '../CategoryList/index';
import { FoodList } from '../FoodList/index';
import mealListStyles from './MealList.module.css';

export function MealList({ cartItems, setCartItems }) {
    const containerRef = useRef(null);
    const scrollContainerRef = useRef(null);
    const categories = [
        'Cold Appetizers',
        'Hot Appetizers',
        'Soup',
        'Sandwiches',
        'Shawarma',
        'Plates On Oven',
        'Grilled',
        'Seafood',
    ];

    return (
        <div className={mealListStyles.container} ref={scrollContainerRef}>
            <div className={mealListStyles.stickyContainer}>
                <CategoryList
                    categoryRef={containerRef}
                    scrollContainerRef={scrollContainerRef}
                    categories={categories}
                />
            </div>
            <div ref={containerRef}>
                {categories.map((category, index) => (
                    <div
                        id={`div-${index}`}
                        className={mealListStyles.categoryContainer}
                        key={index}
                    >
                        <FoodList
                            category={category}
                            cartItems={cartItems}
                            setCartItems={setCartItems}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}
