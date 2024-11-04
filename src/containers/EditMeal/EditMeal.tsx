import {useCallback, useEffect, useState} from 'react';
import {useNavigate, useParams} from "react-router-dom";
import {ApiMeal} from "../../types";
import axiosApi from "../../axiosApi";
import MealForm from "../../components/MealForm/MealForm";
import Spinner from "../Spinner/Spinner";

const EditMeal = () => {
    const {id} = useParams();
    const navigate = useNavigate();
    const [meal, setMeal] = useState<ApiMeal | null>(null);
    const [loading, setLoading] = useState<boolean>(false)

    const editMeal = useCallback(async () => {
        const response = await axiosApi(`meal/${id}.json`);
        if(response.data) {
            setMeal(response.data)
        }
    }, [id])

    useEffect(() => {
        void editMeal()
    }, [editMeal]);

    const addMeal = async (meal: ApiMeal) => {
        try {
            setLoading(true);
            await axiosApi.put(`meal/${id}.json`, meal);
            navigate('/meal');
        } catch (e) {
            console.error(e);
        } finally {
            setLoading(false);
        }
    };
    return meal && (
        <>
            {loading ? <Spinner /> :
                <MealForm newMeal={addMeal} existingMeal={meal} isEdit isLoading={loading}/>
            }
        </>
    );
};

export default EditMeal;