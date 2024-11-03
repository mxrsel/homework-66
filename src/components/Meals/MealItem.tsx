import React from 'react';
import {MealProps} from "../../types";
interface MealItemProps {
    meals: MealProps
}

const MealItem: React.FC<MealItemProps> = ({meals}) => {
    return (
        <>
                <div className='container'>
                    <div className='card'>
                        <div className='card-header'>
                            {meals.mealTime}
                        </div>
                        <div className='card-body'>
                            {meals.description}
                        </div>
                        <div className='card-footer'>
                            {meals.calories} kcal
                        </div>
                    </div>
                </div>
        </>
    );
};

export default MealItem;