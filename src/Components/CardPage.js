import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardActions, CardMedia, Button, Typography, IconButton, Grid } from "@mui/material";
import { AddShoppingCart } from "@mui/icons-material";

const CardPage = ({ mycars }) => {
  return (
    <Grid container spacing={3}>
      {mycars?.map((el, index) => (
        <Grid item key={index} xs={12} sm={6} md={4} lg={3}>
          <Card sx={{ maxWidth: 345, height: '100%', display: 'flex', flexDirection: 'column' }}>
            <CardMedia
              sx={{ height: 250 }}
              image={el.ImgUrl}
              title={el.Brand}
            />
            <CardContent sx={{ flexGrow: 1 }}>
              <Typography gutterBottom variant="h5" component="div">
                {el.Brand}
              </Typography>
              <Typography gutterBottom component="div">
                <span style={{ fontWeight: 'bold' }}> {el.Model}</span>
              </Typography>
              <Typography variant="body2" color="text.secondary">
                <span style={{ fontWeight: 'bold' }}> {el.Price}</span>
                <br />
                <span style={{ textDecoration: 'line-through', color: 'red' }}> discount 10 %  </span>
              </Typography>
            </CardContent>
            <CardActions sx={{ justifyContent: 'space-between', marginTop: 'auto' }}>
              <IconButton
                sx={{ backgroundColor: 'black', color: 'white' }}
                aria-label="add to cart"
                component={Link}
                to={`/details/${el._id}`}>
                <AddShoppingCart />
              </IconButton>
              <Button
                sx={{ backgroundColor: 'red', color: 'white', borderRadius: '20px' }}
                variant="contained"
                component={Link}
                to={`/details/${el._id}`}
              >
                Show more
              </Button>
            </CardActions>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default CardPage;
