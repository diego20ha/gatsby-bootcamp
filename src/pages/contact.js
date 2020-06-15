import React from 'react';

import Layout from '../components/Layout/layout';
import Head from '../components/Head/head';

const AboutPage = () => {
    return (
        <Layout>
            <Head title="Contact" />
            <h1>Contact</h1>
            <p>
                The best way to reach me out is via twitter <a href="https://twitter.com/Diego20HA" target="_blank">@diego20ha</a>.
            </p>
        </Layout>
    )
};

export default AboutPage;