import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

export default function Kunshi({ data }) {
  return (
    <Layout>
        <h1>Kunshi {data.site.siteMetadata.title}</h1>
        <h1>Hoge {data.site.siteMetadata.hogehoge}</h1>
        <p>
                We're the only site running on your computer dedicated to showing the
                best photos and videos of pandas eating lots of food.
        </p>
        <h1>name: {data.site.siteMetadata.kunshi.name}</h1>
        <h1>age: {data.site.siteMetadata.kunshi.age}</h1>
        <h1>job: {data.site.siteMetadata.kunshi.job}</h1>
    </Layout>
  )
}

export const query = graphql`
  query {
    site {
        siteMetadata {
            kunshi {
                name
                age
                job
            }
            title
            hogehoge
        }
    }
  }
`