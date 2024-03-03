import React from 'react'
import { Facebook, YouTube, Instagram, Twitter, RssFeed } from '@mui/icons-material';
import { Container, Grid, Link, Button, Typography } from '@mui/material';

const Contact = () => {
  return (
    <div>
        <Container maxWidth="lg">
        <Grid container spacing={3} justifyContent="center">
          <Grid item xs={12} lg={4} xl={3}>
            <div className="contact-us-sub row">
              <div className="col-12 col-md-6 col-lg-12 social-menu-container">
                <Typography variant="h6" className="contact-us-title">Restez connecté</Typography>
                <ul className="social-menu list-unstyled">
                  <li>
                  <Link className="social-link" href="https://www.facebook.com/auto_tn" rel="noopener" target="_blank" aria-label="Facebook">
                    <Facebook className="social-icon" style={{ color: '#3b5998' }} />
                  </Link>
                  <Link className="social-link" href="https://www.YouTube.com/auto_tn" rel="noopener" target="_blank" aria-label="YouTube">
                    <YouTube className="social-icon" style={{ color: '#c4302b' }} />
                  </Link>
                  <Link className="social-link" href="https://www.Instagram.com/auto_tn" rel="noopener" target="_blank" aria-label="Instagram">
                    <Instagram className="social-icon" style={{ color: '#e4405f' }} />
                  </Link>
                  <Link className="social-link" href="https://www.Twitter.com/auto_tn" rel="noopener" target="_blank" aria-label="Twitter">
                    <Twitter className="social-icon" style={{ color: '#1da1f2' }} />
                  </Link>
                  <Link className="social-link" href="https://www.RssFeed.com/auto_tn" rel="noopener" target="_blank" aria-label="RSS Feed">
                    <RssFeed className="social-icon" style={{ color: '#ff6600' }} />
                  </Link>
                  </li>
                </ul>
              </div>
              <div className="col-12 col-md-6 col-lg-12 footer-newsletter">
                <Typography variant="h6" className="contact-us-title">Newsletter</Typography>
                <form action="/fr/abo-newsletter" method="post" className="newsletter-form">
                  <input label="Votre e-mail" variant="outlined" name="email" type="email" required fullWidth /><br/><br/>
                  <Button variant="contained" color="primary" type="submit">OK</Button>
                </form>
              </div>
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  )
}

export default Contact