import {useState} from 'react';
import {useNavigate} from "react-router-dom";
import {ApiMeal} from "../../types";
import axiosApi from "../../axiosApi";
import MealForm from "../../components/MealForm/MealForm";

const NewMeal = () => {
    const [loading, setLoading] = useState<boolean>(false);
    const navigate = useNavigate();

    const addNewMeal = async(meal: ApiMeal)=> {
        try{
            setLoading(true)
            await axiosApi.post('/meal.json', meal);
            navigate('/meal');
        }catch (e) {
            console.error(e)
        }finally {
            setLoading(false)
        }
    }
    return (
        <div>
            <MealForm newMeal={addNewMeal} isLoading={loading}/>
        </div>
    );
};

export default NewMeal;