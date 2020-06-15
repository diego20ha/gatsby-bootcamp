import React from "react";
import { Link } from 'gatsby';

import Layout from '../components/Layout/layout';
import Head from '../components/Head/head';

const IndexPage = () => {
	return (
		<Layout>
			<Head title="Home" />
			<h1>Homepage</h1>
			<p>I'm Luis Diego, a full-stack developer living in beautiful Costa Rica.</p>
			<p>Need a developer? <Link to="/contact">Conctact me.</Link></p>
		</Layout>
	)
}

export default IndexPage;