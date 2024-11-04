import React, {PropsWithChildren} from "react";
import Toolbar from "../Toolbar/Toolbar";
import './Layout.css'

const Layout: React.FC<PropsWithChildren> = ({children}) => {
    return (
        <div className='bg-image pageImg'>
            <header>
                <Toolbar/>
            </header>
            <main className='container-md'>
                {children}
            </main>
        </div>
    );
};

export default Layout;