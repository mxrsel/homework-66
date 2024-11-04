import {MEAL} from "../../mealTime";
import './MealForm.css'
import React, {FormEvent, useState} from "react";
import {ApiMeal, MealPropsMutation} from "../../types";
import axiosApi from "../../axiosApi";
import ButtonSpinner from "../../UI/ButtonSpinner/ButtonSpinner";

interface Props {
    newMeal: (meal: ApiMeal) => void;
    existingMeal?: MealPropsMutation
    isLoading?: boolean
    isEdit?: boolean
}

const initialState = {
    mealTime: '',
    description: '',
    calories: 0
}

const MealForm: React.FC<Props> = ({newMeal, existingMeal = initialState, isEdit = false, isLoading= false}) => {
    const [meals, setMeals] = useState<MealPropsMutation>(existingMeal);


    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const {name, value} = e.target;
        setMeals((prevState) => ({
            ...prevState,
            [name]: value,
        }))
    }

    const onFormSubmit = async (e: FormEvent) => {
        try {
            e.preventDefault();
            await axiosApi.post('/meal.json', meals);

            newMeal({
                ...meals,
                calories: Number(meals.calories),
            });

            if(!isEdit) {
                setMeals({
                    mealTime: '',
                    description: '',
                    calories: 0,
                });
            }
        } catch (e) {
            console.error(e);
        }
    }
    return (
            <form className='formContainer' onSubmit={onFormSubmit}>
                <h1 className='text-center' style={{color: 'slateblue'}}>Add New Meal</h1>
                <div className='form-group mw-100'>
                    <select
                        name='mealTime'
                        id='mealTime'
                        required
                        value={meals.mealTime}
                        onChange={handleChange}
                        className='form-select mb-2'>
                        {MEAL.map((meal) => (
                            <option key={meal.id} value={meal.id}>{meal.name}</option>
                        ))}
                    </select>
                </div>

                <div className='form-group'>
                     <textarea
                         name='description'
                         id='description'
                         placeholder='Meal Description'
                         value={meals.description}
                         onChange={handleChange}
                         required
                         className='form-control mb-2'
                     />
                </div>

                <div className='form-group d-flex justify-content-between mb-2'>
                    <input
                    type='number'
                    name='calories'
                    id='calories'
                    required
                    placeholder='Calories'
                    value={meals.calories}
                    onChange={handleChange}
                    className='form-control'/>
                    <p className='mt-1 mb-0 ms-1 fs-4' style={{color: 'slateblue'}}>kcal</p>
                </div>


                <button type='submit' className='btn' style={{backgroundColor: 'slateblue', color: 'white'}}>
                    {isEdit ? 'Edit' : 'Save'}
                    {isLoading ? <ButtonSpinner /> : null}
                </button>
            </form>
    );
};

export default MealForm;