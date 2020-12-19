import React, { useState } from "react";
import { Query } from "react-apollo";
import { listStoresQuery } from "../lib/api/posts";
import { makeStyles } from "@material-ui/core/styles";
import { Box } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import GitHubIcon from "@material-ui/icons/GitHub";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";

import ManufacturerDetailCard from "../components/manufacturer/ManufacturerDetailCard";
import ManuFacturerDetailContent from "../components/manufacturer/ManufacturerDetailContent";
import data from "../components/manufacturer/data";
// import Autocomplete from '@material-ui/lab/Autocomplete';
const useStyles = makeStyles((theme) => ({
  mainGrid: {
    marginTop: theme.spacing(3),
  },
  productCard: {
    height: "100%",
  },
}));
<ManuFacturerDetailContent />;
export default function ManufacturerDetail() {
  const classes = useStyles();
  const [products] = useState(data);
  return (
    <Box mt={3}>
      <Grid container spacing={3}>
        <Grid item key={products[0].id} lg={4} md={6} xs={12}>
          <ManufacturerDetailCard
            className={classes.productCard}
            product={products[0]}
          />
        </Grid>
        <ManuFacturerDetailContent
            className={classes.productCard}
            product={products[0]}
          />
          
        </Grid>
    </Box>
  );
}
