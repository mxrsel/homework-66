import React from 'react';
import MealItem from "./MealItem";
import {MealProps} from "../../types";

interface MealsProps {
        meals: MealProps[];
    onDelete: (id: string) => void;
}

const Meals: React.FC<MealsProps> = ({meals, onDelete}) => {

    return (
        <div>
            {meals.map((meal) => (
                <MealItem key={meal.id} meals={meal} onDelete={onDelete}/>
            ))}

        </div>
    );
};

export default Meals;