import React from 'react';
import {MealProps} from "../../types";
import Meals from "../../components/Meals/Meals";
import Spinner from "../Spinner/Spinner";

interface Props {
    meals: MealProps[]
    isLoading?: boolean
    onDelete: (id: string) => void;
}

const MainPage: React.FC<Props> = ({meals, isLoading, onDelete}) => {


    return (
        <>
            {isLoading ? <Spinner/>
            :
                <div>
                {meals.length > 0 ?
                        <Meals meals={meals} onDelete={onDelete}/>
                        : <h2>Meals not added!</h2>
                }
                </div>
            }

        </>
    );
};

export default MainPage;