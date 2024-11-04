import React from 'react';
import {MealProps} from "../../types";
import './MealItem.css'
import {NavLink} from "react-router-dom";
interface MealItemProps {
    meals: MealProps
    onDelete: (id: string) => void;
}

const MealItem: React.FC<MealItemProps> = ({meals, onDelete}) => {
    return (
        <>
                <div className='cardsContainer'>
                    <div className='mainCard'>
                        <div className='d-flex justify-content-between'>
                        <div className='mealTime'>
                            {meals.mealTime}
                        </div>
                            <div>
                                <NavLink className='btn mealsBtn' to={`/meal/editMeal/${meals.id}`}><i
                                    className="bi bi-pencil"></i></NavLink>
                                <button className='btn mealsBtn' type='submit' onClick={() => onDelete(meals.id)}><i className="bi bi-archive"></i>
                                </button>
                            </div>
                        </div>
                        <div className='d-flex justify-content-between mt-2 text-light'>
                            <div>
                                {meals.description}
                            </div>

                            <div>
                                {meals.calories} kcal
                            </div>
                        </div>
                    </div>
                </div>
        </>
    );
};

export default MealItem;