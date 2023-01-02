import * as React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import * as style from "../styles/singleBlog.module.scss"

const SingleBlog = (props) => {
    return (
        <Layout>
            <div className={style.hero}>
                <img src={props.data.microcmsBlog.image.url} alt="blog-image" width="1000" />
            </div>
            <div className={style.wrapper}>
                <div className={style.container}>
                    <h1>{props.data.microcmsBlog.title}</h1>
                    <p>{props.data.microcmsBlog.date}</p>
                    <div dangerouslySetInnerHTML={{ __html: props.data.microcmsBlog.textBody }}  />
                </div>
            </div>
        </Layout>
    )
}

export default SingleBlog

export const query = graphql`
    query MicrocmsSingleBlogQuery ($slug: String!){
        microcmsBlog (slug: {eq: $slug }){
            slug
            textBody
            title
            image {
                url
            }
            blogId
            id
            date(formatString: "YYYY年MM月DD日")
            excerpt
        }
    }
`

export const Head = (props) => {
    return (
        <>
            <title>{props.data.microcmsBlog.title}</title>
            <description>{props.data.microcmsBlog.excerpt}</description>
        </>
    )
}