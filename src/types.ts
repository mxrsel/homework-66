export interface MealId {
    id: string;
    name: string;
}

export interface MealProps {
    id: string;
    mealTime: string;
    description: string;
    calories: number;
}

export interface MealPropsMutation {
    mealTime: string;
    description: string;
    calories: number;
}