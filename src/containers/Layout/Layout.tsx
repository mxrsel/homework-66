import React, {PropsWithChildren} from "react";
import Toolbar from "../Toolbar/Toolbar";


const Layout: React.FC<PropsWithChildren> = ({children}) => {
    return (
        <div className='bg-image vh-100 pageImg'>

            <header>
                <Toolbar/>
            </header>

            <main className='container'>
                {children}
            </main>
        </div>
    );
};

export default Layout;