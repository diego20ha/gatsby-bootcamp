import React from 'react';
import { Link } from 'gatsby';
import Head from '../components/Head/head';

import Layout from '../components/Layout/layout';

const NotFound = () => {
    return (
        <Layout>
            <Head title="404" />
            <h1>Page not found</h1>
            <Link to="/">Head home</Link>
        </Layout>
    )
}

export default NotFound;