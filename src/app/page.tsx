import {
  Box,
  Button,
  Container,
  Rating,
  Stack,
  Typography,
} from "@mui/material";

const HomeHero = () => {
  return (
    <Box>
      <Container maxWidth="lg">
        <Box maxWidth="sm">
          <Typography variant="h2" sx={{ mb: 2 }}>
            Your Premier Destination for &nbsp;
            <Typography component="span" color="primary.main" variant="inherit">
              Wine-Inspired Shopping!
            </Typography>{" "}
          </Typography>
          <Typography
            color="text.secondary"
            sx={{
              fontSize: 20,
              fontWeight: 500,
            }}
          >
            Explore endless choices, savor delightful deals – Welcome to
            ViniMart, where your shopping journey is an experience, and every
            purchase tells a story!
          </Typography>
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
        </Box>
      </Container>
    </Box>
  );
};
export default HomeHero;
