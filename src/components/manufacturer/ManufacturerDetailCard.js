import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import {
  Avatar,
  Box,
  Card,
  CardContent,
  Divider,
  Grid,
  Typography,
  makeStyles,
} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import CardHeader from "@material-ui/core/CardHeader";

import AccessTimeIcon from "@material-ui/icons/AccessTime";
import GetAppIcon from "@material-ui/icons/GetApp";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import PhoneIcon from "@material-ui/icons/Phone";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
const useStyles = makeStyles((theme) => ({
  root: {},
  statsItem: {
    alignItems: "center",
    display: "flex",
  },
  statsIcon: {
    marginRight: theme.spacing(1),
  },
}));

const ManufacturerDetailCard = ({ className, product, ...rest }) => {
  const classes = useStyles();

  return (
    <Card className={clsx(classes.root, className)} {...rest}>
      <CardContent>
        <Grid container justify="flex-start" spacing={2}>
          <Grid item>
            <Typography align="center" color="textPrimary" variant="h5">
              <Box fontWeight="fontWeightBold">HS컴퍼니</Box>
            </Typography>
          </Grid>
          <Grid item>
            <FavoriteBorderIcon />
          </Grid>
        </Grid>

        <Box display="flex" mb={3}>
          <Typography align="center" color="textPrimary" variant="body1">
            서울시 강남구 도산대로55길37
          </Typography>
        </Box>

        <Box mb={3}>
          <Grid container justify="flex-start" spacing={2}>
            <Grid className={classes.statsItem} item>
              <PhoneIcon className={classes.statsIcon} color="action" />
              <Typography
                color="textSecondary"
                display="inline"
                variant="body2"
              >
                연락처 조회수 1
              </Typography>
            </Grid>
            <Grid className={classes.statsItem} item>
              <ChatBubbleOutlineIcon
                className={classes.statsIcon}
                color="action"
              />
              <Typography
                color="textSecondary"
                display="inline"
                variant="body2"
              >
                거래후기 3
              </Typography>
            </Grid>
          </Grid>
        </Box>

        <Button
          variant="outlined"
          size="medium"
          color="primary"
          className={classes.margin}
        >
          02-1234-4578
        </Button>
      </CardContent>
      <Box flexGrow={1} />
      <Divider />
    </Card>
  );
};

ManufacturerDetailCard.propTypes = {
  className: PropTypes.string,
  product: PropTypes.object.isRequired,
};

export default ManufacturerDetailCard;
