import React from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';
import Head from '../components/Head/head';

import Layout from '../components/Layout/layout';
import blogStyles from '../styles/blog.module.scss';

const BlogPage = () => {
    const data = useStaticQuery(graphql`
        query {
            allContentfulBlogPost (
                sort: {
                  fields: publishedDate,
                  order: DESC
                }
              ) {
                edges {
                  node {
                    title,
                    slug,
                    publishedDate (
                        formatString: "MMMM Do, YYYY"
                    )
                  }
                }
            }
        }
    `);

    return (
        <Layout>
            <Head title="Blog" />
            <h1>Blogs</h1>
            <ol className={blogStyles.postList}>
            {
                data.allContentfulBlogPost.edges.map( (post, ind) => (
                    <li key={ind}
                        className={blogStyles.postListItem}>
                        <Link className={blogStyles.postListLink}
                            to={`/blog/${post.node.slug}`}>
                            <h2 className={blogStyles.postHeading}>
                                {post.node.title}
                            </h2>
                            <p className={blogStyles.postDate}>
                                {post.node.publishedDate}
                            </p>
                        </Link>
                    </li>
                ))
            }
            </ol>
        </Layout>
    )
}

export default BlogPage;