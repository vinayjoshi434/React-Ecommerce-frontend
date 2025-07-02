import React from "react";

import Button from "@mui/joy/Button";
import Carditem from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";

import Typography from "@mui/joy/Typography";

const CategoryCard = ({ categoryname, onClick }) => {
  console.log(categoryname);

  return (
    <Carditem
      variant="outlined"
      sx={{
        width: { xs: "70vw", sm: 160, md: 200 },
        flex: "0 0 auto",
        borderRadius: "lg",
        p: 2,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 1.5,
        transition: "transform 0.2s, box-shadow 0.2s",
        "&:hover": { transform: "translateY(-4px)", boxShadow: "md" },
      }}
    >
      <Typography level="title-md" textAlign="center">
        {categoryname}
      </Typography>

      <Button variant="solid" size="sm" onClick={onClick} fullWidth>
        Explore
      </Button>
    </Carditem>
  );
};

export default CategoryCard;
