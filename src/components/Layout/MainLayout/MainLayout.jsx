import React from 'react';
import Header from '../../Shared/Header/Header';
import { Outlet, useNavigation } from 'react-router-dom';
import Footer from '../../Shared/Footer/Footer';

const MainLayout = () => {
    const navigation = useNavigation();
    return (
        <div>
            <Header></Header>
            <div>
                {navigation.state === 'loading' ? <progress className="progress w-56"></progress> : ''}
            </div>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;