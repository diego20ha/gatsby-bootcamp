import React from 'react';
import { Link } from 'gatsby';
import Head from '../components/Head/head';

import Layout from '../components/Layout/layout';

const AboutPage = () => {
    return (
        <Layout>
            <Head title="About" />
            <h1>About page</h1>
            <p>Aboout details will show up here later on.</p>
            <p><Link to="/contact">Wanto to work with me? Reach out.</Link></p>
        </Layout>
    )
};

export default AboutPage;