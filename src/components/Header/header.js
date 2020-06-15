import React from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';

import headerStyles from './header.module.scss';

const Header = () => {
    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    title
                }
            }
        }
    `);

    return (
        <header className={headerStyles.header}>
            <Link to="/" className={headerStyles.link} className={headerStyles.title}>
                {data.site.siteMetadata.title}
            </Link>
            <nav>
                <ul className={headerStyles.navItemList}>
                    <li>
                        <Link to="/" className={headerStyles.link} activeClassName={headerStyles.activeNavItem}>
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link to="/blog" className={headerStyles.link} activeClassName={headerStyles.activeNavItem}>
                            Blog
                        </Link>
                    </li>
                    <li>
                        <Link to="/about" className={headerStyles.link} activeClassName={headerStyles.activeNavItem}>
                            About
                        </Link>
                    </li>
                    <li>
                        <Link to="/contact" className={headerStyles.link} activeClassName={headerStyles.activeNavItem}>
                            Conctact
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;