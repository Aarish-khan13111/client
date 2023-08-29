import { Box } from "@mui/material";

const UserImage = ({ image, size = "60px" }) => {
  const baseurl = process.env.REACT_APP_BASE_URL;
  const imgsrc = `${baseurl}/assets/${image}`;
  return (
    <Box width={size} height={size}>
      <img
        style={{ objectFit: "cover", borderRadius: "50%" }}
        width={size}
        height={size}
        alt="user"
        src={imgsrc}
      />
    </Box>
  );
};

export default UserImage;
