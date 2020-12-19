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

const ManufacturerDetailContent = ({ className, product, ...rest }) => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Grid item lg={4} md={6} xs={12}>
        <Card className={clsx(classes.root, className)} {...rest}>
          <CardContent>
            <Typography color="textPrimary" variant="h6">
              <Box fontWeight="fontWeightBold" mb={3}>
                사업형태
              </Box>
            </Typography>

            <Typography variant="body1">직접생산</Typography>
            <Typography color="textPrimary" variant="h6">
              <Box fontWeight="fontWeightBold" mb={3}>
                주요업무
              </Box>
            </Typography>

            <Typography variant="body1">봉제</Typography>
          </CardContent>
          <Box flexGrow={1} />
          <Divider />
        </Card>
      </Grid>
      <Grid item lg={4} md={6} xs={12}>
        <Card className={clsx(classes.root, className)} {...rest}>
          <CardContent>
            <Typography color="textPrimary" variant="h6">
              <Box fontWeight="fontWeightBold" mb={3}>
                주요 생산 카테고리
              </Box>
            </Typography>

            <Typography variant="body1">패션잡화</Typography>
            <Typography color="textPrimary" variant="h6">
              <Box fontWeight="fontWeightBold" mb={3}>
                주요 생산 품목
              </Box>
            </Typography>

            <Typography variant="body1">봉제</Typography>
          </CardContent>
          <Box flexGrow={1} />
          <Divider />
        </Card>
      </Grid>
    </React.Fragment>
  );
};

ManufacturerDetailContent.propTypes = {
  className: PropTypes.string,
  product: PropTypes.object.isRequired,
};

export default ManufacturerDetailContent;
