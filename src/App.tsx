import Layout from "./containers/Layout/Layout";
import {Route, Routes} from "react-router-dom";
import MealForm from "./components/MealForm/MealForm";

const App = () => {
    return (
    <>
    <Layout>
        <Routes>
            <Route path='/meal/home-page/newMeal' element={<MealForm />} />
        </Routes>
    </Layout>
    </>
    )
};

export default App
