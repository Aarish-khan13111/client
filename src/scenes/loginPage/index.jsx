import { Box, Typography, useTheme, useMediaQuery } from "@mui/material";
import Form from "./Form";
import FlexBetween from "components/FlexBetween";

const LoginPage = () => {
  const theme = useTheme();
  const isNonMobileScreens = useMediaQuery("(min-width: 1000px)");
  return (
    <Box>
      <Box
        width={isNonMobileScreens ? "25%" : "93%"}
        m="2rem auto"
        borderRadius="2rem"
        backgroundColor={theme.palette.background.alt}
        p="1rem 4%"
        mt="5rem"
        textAlign="center">
        <FlexBetween gap="1rem">
          <img width="60" alt="logo" src="../assets/icon.png" />

          <Typography fontWeight="bold" fontSize="32px" color="primary">
            Sociopedia
          </Typography>
        </FlexBetween>
      </Box>

      <Box
        width={isNonMobileScreens ? "50%" : "93%"}
        p="2rem"
        m="2rem auto"
        borderRadius="1.5rem"
        backgroundColor={theme.palette.background.alt}>
        <Typography fontWeight="500" variant="h5" sx={{ mb: "1.5rem" }}>
          Welcome to Socipedia, the Social Media for Sociopaths!
        </Typography>
        <Form />
      </Box>
    </Box>
  );
};

export default LoginPage;
