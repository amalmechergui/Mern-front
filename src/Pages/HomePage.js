import React from "react";
import CardPage from "../Components/CardPage";
import Footer from "../Components/Footer";
import News from "../Components/News";
import Carousel from 'react-material-ui-carousel'; 
import Contact from "../Components/Contact";
import {  Paper, Link,  Button, Typography } from '@mui/material';


const HomePage = ({ mycars }) => {
     var items = [
      {
        name: "Trouvez votre voiture de rêve dès aujourd'hui sur notre site",
        description: "Parcourez notre sélection exclusive et trouvez la voiture de vos rêves dès aujourd'hui sur notre site, où qualité et choix se rencontrent pour vous offrir une expérience d'achat incomparable",
        image: "https://www.classicandsportscar.com/sites/default/files/styles/slideshow_slide/public/2022-10/04-Bentley-8-Litre_bentley.jpg?itok=WlolOSh2"
      },
      {
        name: "Exclusivement sur notre site, achetez des voitures de luxe.",
        description: "Explorez notre sélection exclusive de voitures de luxe disponibles uniquement sur notre site pour une expérience d'achat incomparable.",
        image: "https://collectingcars.imgix.net/images/2020/08/cover-77.jpg?w=1263&fit=fillmax&crop=edges&auto=format,compress&cs=srgb&q=85"
      },
      {
        name: "Explorez nos offres spéciales et promotions",
        description: "Découvrez une multitude d'opportunités à prix avantageux avec nos offres spéciales et promotions exclusives.",
        image: "https://news.dupontregistry.com/wp-content/uploads/2023/07/rr-main-scaled.jpg"
      }
     ];
     
     return (
      /* Start Carousel */
      <div>
        <div className="carousel">
          <Carousel animation="slide">
            {items?.map((item, i) => (
              <Paper className="Paper-carousel" key={i}>
                <img src={item.image} alt={item.name} />
                <div>
                  <Typography variant="h6">{item.name}</Typography>
                  <Typography variant="body1">{item.description}</Typography>
                  <Link to="/" style={{ textDecoration: "none" }}>
                    <Button variant="contained" color="warning">
                      Check it out!
                    </Button>
                  </Link>
                </div>
              </Paper>
            ))}
          </Carousel>
        </div>
      
        <div className="news">
          <h2 className="spark-heading-2">Offres de voitures neuves :</h2>
          <CardPage mycars={mycars} />

        </div>

        <div className="news">
          <h2 className="spark-heading-2">Découvrez notre dernière arrivée :</h2>
          <News />
        </div>
        <div className="contact-us-container">
          <Contact />
        </div>
        <Footer />
     </div>



     
      );
    }

export default HomePage;