import * as React from "react"
import { graphql, Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import * as style from "../styles/blog.module.scss"

const Blog = (props) => {
    return (
        <Layout>
            <div className={style.wrapper}>
                <div className={style.container}>
                    <h1>Blog</h1>
                    <p>弊社サービスやお客様の声などを紹介します。</p>
                        {props.data.allMicrocmsBlog.edges.map((singleBlog, index) => (
                            <div className={style.blogCard} key={index}>
                                <div className={style.textContainer}>
                                    <h3>{singleBlog.node.title}</h3>
                                    <p>{singleBlog.node.excerpt}</p>
                                    <p>{singleBlog.node.date}</p>
                                    <Link to={singleBlog.node.slug}>Read More</Link>
                                </div>
                                <img src={singleBlog.node.image.url} alt="card-image" className={style.cardImg} width="600" height="150" />
                            </div>
                            )
                        )}
                </div>
            </div>
        </Layout>
    )
}

export default Blog
export const query = graphql`
    query MicrocmsBlogQuery {
        allMicrocmsBlog(sort: {date: DESC}) {
            edges {
                node {
                    blogId
                    date(formatString: "YYYY年MM月DD日")
                    excerpt
                    image {
                        height
                        url
                        width
                    }
                    title
                    slug
                }
            }
        }
    }
`

export const Head = () => {
    return (
        <>
            <title>ブログ</title>
            <description>これはブログ記事です</description>
        </>
    )
}