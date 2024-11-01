import {NavLink} from "react-router-dom";
import './Toolbar.css';

const Toolbar = () => {
    return (
        <>

            <div className='main-container container'>
                <div className='navbar navbar-light fixed-top mainNav shadow-0'>
                    <div className='container-fluid'>
                        <NavLink to='/home-page' className='navbar-brand'>
                         <p style={{color: 'white'}}>   <span style={{color: 'lightgreen'}}>Calories</span> tracker</p>
                        </NavLink>
                        <NavLink to='/home-page/newMeal' className='nav-item'>Add New Meal</NavLink>
                    </div>
                </div>
            </div>


        </>
    );
};

export default Toolbar;