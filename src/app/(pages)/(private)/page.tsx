"use client";
import { Box, Container, Grid, Rating, Stack, Typography } from "@mui/material";
import TopNav from "./top-nav";

const HomeHero = () => {
  return (
    <Box
      sx={{
        pt: "120px",
      }}
    >
      <TopNav />
      <Container maxWidth="lg">
        <Grid container spacing={3} direction="column" alignItems="center">
          <Grid item xs={12}>
            <Typography variant="h1" align="center" sx={{ mb: 2 }}>
              Let us worry about the&nbsp;
              <Typography
                component="span"
                color="primary.main"
                variant="inherit"
              >
                User Experience
              </Typography>
              , you focus on Developing.
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography
              color="text.secondary"
              align="center"
              sx={{
                fontSize: 20,
                fontWeight: 500,
              }}
            >
              A professional kit that comes with ready-to-use MUI components
              developed with one common goal in mind, help you build faster &
              beautiful.
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Stack
              alignItems="center"
              direction="row"
              flexWrap="wrap"
              spacing={1}
              sx={{ my: 3 }}
            >
              <Rating readOnly value={4.7} precision={0.1} max={5} />
              <Typography
                color="text.primary"
                variant="caption"
                sx={{ fontWeight: 700 }}
              >
                4.7/5
              </Typography>
              <Typography color="text.secondary" variant="caption">
                based on (70+ reviews)
              </Typography>
            </Stack>
            <Grid item xs={12}>
              <Typography variant="h1" align="center" sx={{ mb: 2 }}>
                Let us worry about the&nbsp;
                <Typography
                  component="span"
                  color="primary.main"
                  variant="inherit"
                >
                  User Experience
                </Typography>
                , you focus on Developing.
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography
                color="text.secondary"
                align="center"
                sx={{
                  fontSize: 20,
                  fontWeight: 500,
                }}
              >
                A professional kit that comes with ready-to-use MUI components
                developed with one common goal in mind, help you build faster &
                beautiful.
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="h1" align="center" sx={{ mb: 2 }}>
                Let us worry about the&nbsp;
                <Typography
                  component="span"
                  color="primary.main"
                  variant="inherit"
                >
                  User Experience
                </Typography>
                , you focus on Developing.
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography
                color="text.secondary"
                align="center"
                sx={{
                  fontSize: 20,
                  fontWeight: 500,
                }}
              >
                A professional kit that comes with ready-to-use MUI components
                developed with one common goal in mind, help you build faster &
                beautiful.
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};
export default HomeHero;
