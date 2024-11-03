import React from 'react';
import MealItem from "./MealItem";
import {MealProps} from "../../types";

interface MealsProps {
        meals: MealProps[];
}

const Meals: React.FC<MealsProps> = ({meals}) => {
    return (
        <div>
            {meals.map((meal) => (
                <MealItem key={meal.id} meals={meal} />
            ))}

        </div>
    );
};

export default Meals;