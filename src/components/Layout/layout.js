import React from 'react';

import Footer from '../Footer/footer';
import Header from '../Header/header';

import '../../styles/index.scss';
import layoutStyles from './layout.module.scss';

const Layout = (props) => {
    return(
        <div>
            <div className={layoutStyles.container}>
                <div className={layoutStyles.content}>
                    <Header />
                    {props.children}
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Layout;