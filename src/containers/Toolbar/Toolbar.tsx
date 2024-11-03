import {NavLink} from "react-router-dom";
import './Toolbar.css';

const Toolbar = () => {
    return (
        <>

            <div className='main-container container pt-3'>
                <div className='navbar navbar-light mainNav shadow-0'>
                    <div className='container-fluid'>
                        <NavLink to='/meal/home-page' className='navbar-brand'>
                         <p style={{color: 'white'}}>   <span style={{color: 'slateblue'}}>Calories</span> tracker</p>
                        </NavLink>
                        <NavLink to='/meal/home-page/newMeal' className='nav-item'>Add New Meal</NavLink>
                    </div>
                </div>
            </div>


        </>
    );
};

export default Toolbar;