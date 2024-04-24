import React from "react";
import Layout from "../components/Layout/Layout";
import { Box, Typography } from "@mui/material";

const About = () => {
  return (
    <Layout>
      <Box
        sx={{
          my: 5,
          textAlign: "center",
          p: 11,
          "& h4": { fontWeight: "bold", my: 2, fontSize: "2rem" },
          "& p": { textAlign: "justify" },
          "@media (max-width: 600px)": {
            mt: 0,
            "& h4": {
              fontSize: "1.5rem",
            },
          },
        }}
      >
        <Typography variant="h4">Welcome to Swadh Restaurant</Typography>
        <p>
          Welcome to Swadh Restaurant, where culinary artistry meets tradition
          and innovation. Our story began with a vision to redefine dining
          experiences in the vibrant city of Thane. Grounded in a profound
          commitment to customer satisfaction and a deep love for culinary
          craftsmanship, we strive to offer exceptional cuisine and service that
          exceed expectations. At Swadh Restaurant, our dedicated team of
          culinary experts is fueled by a shared passion for excellence,
          authenticity, and continual enhancement. We believe in curating
          memorable dining experiences by understanding our patrons' individual
          preferences and crafting bespoke culinary journeys that leave a
          lasting impression.
        </p>
        <br />
        <p>
          Beyond our culinary offerings, we are dedicated to making a positive
          impact on our community and environment. Through sustainable
          practices, community engagement initiatives, and ethical business
          practices, we aspire to contribute meaningfully to society while
          ensuring a sustainable future for generations to come. Join us at
          Swadh Restaurant on this exciting gastronomic adventure as we continue
          to innovate, evolve, and make a positive difference in the world, one
          delectable dish at a time. Thank you for choosing Swadh Restaurant for
          your dining experience. Here's to good food, cherished moments, and a
          brighter tomorrow!
        </p>
      </Box>
    </Layout>
  );
};

export default About;
