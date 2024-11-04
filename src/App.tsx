import Layout from "./containers/Layout/Layout";
import {Route, Routes} from "react-router-dom";
import MainPage from "./containers/MainPage/MainPage";
import React, {useCallback, useEffect, useState} from "react";
import {MealList, MealProps} from "./types";
import axiosApi from "./axiosApi";
import EditMeal from "./containers/EditMeal/EditMeal";
import NewMeal from "./containers/NewMeal/NewMeal";


const App: React.FC = () => {
    const [meals, setMeals] = useState<MealProps[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [totalKcal, setTotalKcal] = useState<number>(0);


    const fetchMeals = useCallback(async () => {
        try {
            setLoading(true);
            const response: {data: MealList | null} = await axiosApi.get('/meal.json');
            const mealList = response.data;

            if(mealList == null) {
                setMeals([]);
            } else {
                const mealsIdData = Object.keys(mealList).map((meal) => {
                    return {...mealList[meal], id: meal };
                });
                setMeals(mealsIdData);
            }
        } catch (e) {
            console.error('Failed to fetch meals', e);
        } finally {
            setLoading(false);
        }
    }, []);

    const calculateTotalCalories = useCallback(() => {
        const total = meals.reduce((acc, meal) => {
            const calories = Number(meal.calories);
            return acc + calories
        }, 0);
        setTotalKcal(total);
    }, [meals]);

    const deleteMeal = async (mealId: string) => {
        try {
            await axiosApi.delete(`/meal/${mealId}.json`);
            setMeals(prevMeals => prevMeals.filter(meal => meal.id !== mealId));
        } catch (error) {
            console.error("Failed to delete meal", error);
        }
    };

    useEffect(() => {
        void fetchMeals()
    }, [fetchMeals]);

    useEffect(() => {
        calculateTotalCalories()
    }, [meals, calculateTotalCalories]);


    return (
    <>
    <Layout>
        <h2 style={{color: 'mediumblue', textAlign: 'center'}}>Total Calories: {totalKcal} kcal</h2>
        <Routes>
            <Route path='/meal' element={<MainPage meals={meals} isLoading={loading} onDelete={deleteMeal}/>} />
            <Route path='/meal/editMeal/:id' element={<EditMeal />}/>
            <Route path='/meal/newMeal' element={<NewMeal />} />
            <Route path='*' element={<h2>Not Found</h2>} />
        </Routes>
    </Layout>
    </>
    )
};

export default App
