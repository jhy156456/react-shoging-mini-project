import React, { useState } from "react";
import { Query } from "react-apollo";
import { listStoresQuery } from "../lib/api/posts";
import { makeStyles } from "@material-ui/core/styles";
import { Box } from "@material-ui/core";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import GitHubIcon from "@material-ui/icons/GitHub";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import Header from "./Header";
import MainFeaturedPost from "./MainFeaturedPost";
import FeaturedPost from "./FeaturedPost";
import Main from "./Main";
import Sidebar from "./Sidebar";
import Footer from "./Footer";
import post1 from "./blog-post.1.md";
import post2 from "./blog-post.2.md";
import post3 from "./blog-post.3.md";
import TextField from "@material-ui/core/TextField";
import HighlightsSelect from "./common/HighlightsSelect";
import { Typography } from "@material-ui/core";
import ManufacturerDetailCard from "./manufacturer/ManufacturerDetailCard";
import data from "./manufacturer/data";
import ManufacturerPost from "./ManufacturerPost";
// import Autocomplete from '@material-ui/lab/Autocomplete';
const useStyles = makeStyles((theme) => ({
  mainGrid: {
    marginTop: theme.spacing(3),
  },
  productCard: {
    height: "100%",
  },
}));

const mainFeaturedPost = {
  title: "Title of a longer featured blog post",
  description:
    "Multiple lines of text that form the lede, informing new readers quickly and efficiently about what's most interesting in this post's contents.",
  image: "https://source.unsplash.com/random",
  imgText: "main image description",
  linkText: "Continue reading…",
};

const featuredPosts = [
  {
    title: "Featured post",
    date: "Nov 12",
    description:
      "This is a wider card with supporting text below as a natural lead-in to additional content.",
    image: "https://source.unsplash.com/random",
    imageText: "Image Text",
  },
  {
    title: "Post title",
    date: "Nov 11",
    description:
      "This is a wider card with supporting text below as a natural lead-in to additional content.",
    image: "https://source.unsplash.com/random",
    imageText: "Image Text",
  },
  {
    title: "Post title2",
    date: "Nov 11",
    description:
      "This is a wider card with supporting text below as a natural lead-in to additional content.",
    image: "https://source.unsplash.com/random",
    imageText: "Image Text",
  },
  {
    title: "Post title3",
    date: "Nov 11",
    description:
      "This is a wider card with supporting text below as a natural lead-in to additional content.",
    image: "https://source.unsplash.com/random",
    imageText: "Image Text",
  },
];

const posts = [post1, post2, post3];

const sidebar = {
  title: "About",
  description:
    "Etiam porta sem malesuada magna mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur.",
  archives: [
    { title: "March 2020", url: "#" },
    { title: "February 2020", url: "#" },
    { title: "January 2020", url: "#" },
    { title: "November 1999", url: "#" },
    { title: "October 1999", url: "#" },
    { title: "September 1999", url: "#" },
    { title: "August 1999", url: "#" },
    { title: "July 1999", url: "#" },
    { title: "June 1999", url: "#" },
    { title: "May 1999", url: "#" },
    { title: "April 1999", url: "#" },
  ],
  social: [
    { name: "GitHub", icon: GitHubIcon },
    { name: "Twitter", icon: TwitterIcon },
    { name: "Facebook", icon: FacebookIcon },
  ],
};

export default function Blog() {
  const classes = useStyles();
  const [products] = useState(data);
  return (
    <div>
      <React.Fragment>
        <CssBaseline />

          <main>
            <MainFeaturedPost post={mainFeaturedPost} />
            <Typography align="left">상세 필터</Typography>
            <Grid container justify="flex-start">
              <Grid item>
                <HighlightsSelect label="지역" />
              </Grid>
              <Grid item>
                <HighlightsSelect label="생산 방식" />
              </Grid>
            </Grid>
            <Grid container spacing={4} justify="flex-start">
              <Query
                query={listStoresQuery}
                variables={{
                  page: 0,
                  user_id: "shogong",
                  required: true,
                }}
              >
                {({ data, loading }) =>
                  loading ? (
                    <p>불러오는중..</p>
                  ) : (
                    <>
                      {data.adminUser.result.map((post) => (
                        <ManufacturerPost key={post.id} post={post} />
                      ))}
                      </>
                  )
                }
              </Query>
            </Grid>
            <Grid container spacing={5} className={classes.mainGrid}>
              <Main title="From the firehose" posts={posts} />
              <Sidebar
                title={sidebar.title}
                description={sidebar.description}
                archives={sidebar.archives}
                social={sidebar.social}
              />
            </Grid>

            <Box mt={3}>
              <Grid container spacing={3}>
                {products.map((product) => (
                  <Grid item key={product.id} lg={4} md={6} xs={12}>
                    <ManufacturerDetailCard
                      className={classes.productCard}
                      product={product}
                    />
                  </Grid>
                ))}
              </Grid>
            </Box>
          </main>

      </React.Fragment>
    </div>
  );
}
