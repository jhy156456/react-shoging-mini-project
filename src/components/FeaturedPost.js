import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Hidden from "@material-ui/core/Hidden";
import Paper from "@material-ui/core/Paper";
import TwitterIcon from "@material-ui/icons/Twitter";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import PhoneIcon from "@material-ui/icons/Phone";
const useStyles = makeStyles((theme) => ({
  card: {
    display: "flex",
  },
  cardDetails: {
    flex: 1,
  },
  cardMedia: {
    width: 160,
  },
  paper: {
    padding: theme.spacing(2),
    margin: theme.spacing(1),
  },
}));

export default function FeaturedPost(props) {
  const classes = useStyles();
  const { post } = props;
  console.log(post)

  return (
    <Grid item xs={10} md={5}>
      <CardActionArea component="a">
        <Card className={classes.card}>
          <div className={classes.cardDetails}>
            <CardContent>
              <Grid container justify="space-around">
                <Grid item xs={3} sm={3} md={3}>
                  <Typography align="center" variant="h5">
                    제조사명
                  </Typography>
                </Grid>
                <Grid item xs={3} sm={3} md={3}>
                  <Typography align="center" variant="h6">
                    원단공장
                  </Typography>
                </Grid>
                <Grid item xs={3} sm={3} md={3}>
                  <FavoriteBorderIcon />
                </Grid>
              </Grid>
              {/* <Typography variant="subtitle1" color="textSecondary">
                {post.date}
              </Typography> */}
              <Paper className={classes.paper}>hihi</Paper>

              <Grid container justify="space-around" className={classes.paper}>
                <Grid item xs={3} sm={6} md={3}>
                  <Typography variant="subtitle2">주요 생산 품목</Typography>
                </Grid>
                <Grid item xs={3} sm={6} md={3}>
                  <Typography variant="subtitle2">카테고리</Typography>
                </Grid>
                <Grid item xs={3} sm={6} md={3}>
                  <Typography variant="subtitle2">주요 생산 품목</Typography>
                </Grid>
              </Grid>
              <Grid container justify="space-around" className={classes.paper}>
                <Grid item xs={3} sm={6} md={3}>
                  <Typography variant="subtitle2">주소</Typography>
                </Grid>
                <Grid item xs={3} sm={6} md={3}>
                  <Typography variant="subtitle2">최소생산수량</Typography>
                </Grid>
                <Grid item xs={3} sm={6} md={3}>
                  <Typography variant="subtitle2">규모</Typography>
                </Grid>
              </Grid>

              <Grid container justify="flex-start" className={classes.paper} >
                <Grid >
                  <ChatBubbleOutlineIcon />
                  <Typography variant="caption" style={{verticalAlign:'super'}}>3</Typography>
                </Grid>
                <Grid>
                  <PhoneIcon />
                  <Typography variant="caption" style={{verticalAlign:'super'}}>14</Typography>
                </Grid>
              </Grid>

              {/* <Typography variant="subtitle1" paragraph>
                {post.description}
              </Typography>
              <Typography variant="subtitle1" color="primary">
                Continue reading...
              </Typography> */}
            </CardContent>
          </div>
          {/* <Hidden xsDown>
            <CardMedia
              className={classes.cardMedia}
              image={post.image}
              title={post.imageTitle}
            />
          </Hidden> */}
        </Card>
      </CardActionArea>
    </Grid>
  );
}

FeaturedPost.propTypes = {
  post: PropTypes.object,
};
