import React from "react";
import { Link } from "react-router-dom";

import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import AspectRatio from "@mui/joy/AspectRatio";
import Typography from "@mui/joy/Typography";
import Button from "@mui/joy/Button";
import CardOverflow from "@mui/joy/CardOverflow";
import Chip from "@mui/joy/Chip";
import Stack from "@mui/joy/Stack";
import Box from "@mui/joy/Box";
import Add from "@mui/icons-material/Add";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";

import { useDispatch } from "react-redux";
import { addItem } from "../../Features/Cart/CartSlice";

export default function ProductCard({ product }) {
  const { title, description, category, brand, availabilityStatus, thumbnail } =
    product;

  const dispatch = useDispatch();

  const onAddToCart = () => {
    dispatch(addItem(product));
  };

  const statusColor =
    {
      "In Stock": "success",
      "Low Stock": "warning",
      "Out of Stock": "danger",
    }[availabilityStatus] || "neutral"; // this is object lookup

  return (
    <Card
      variant="outlined"
      sx={{
        width: { xs: "100%", sm: "48%", md: 240, lg: 260 },
        flex: "0 0 auto",
        p: 0,
        borderRadius: "lg",
        boxShadow: "sm",
        transition: "transform 0.3s ease, box-shadow 0.3s ease",
        // cursor: onClick ? "pointer" : "default",
        "&:hover": {
          transform: "translateY(-6px)",
          boxShadow: "lg",
        },
        "&:hover img": {
          transform: "scale(1.05)",
        },
      }}
    >
      {/* Image */}
      <CardOverflow>
        <AspectRatio
          ratio="4/3"
          sx={{
            // responsive tweaks live here
            minHeight: { xs: 120, sm: 140 },
          }}
        >
          <img
            src={thumbnail}
            alt={title}
            loading="lazy"
            style={{
              objectFit: "cover",
              transition: "transform 0.3s ease",
            }}
          />
        </AspectRatio>
      </CardOverflow>

      {/* Content */}
      <CardContent
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 1.2,
          padding: 1.5,
        }}
      >
        <Stack direction="row" justifyContent="space-between">
          <Chip size="sm" variant="soft">
            {category}
          </Chip>
          <Chip size="sm" variant="soft" color={statusColor}>
            {availabilityStatus}
          </Chip>
        </Stack>

        <Box>
          <Typography level="title-md">{title}</Typography>
          <Typography level="body-sm" sx={{ color: "text.secondary" }}>
            {brand}
          </Typography>
        </Box>

        <Typography
          level="body-sm"
          sx={{
            display: "-webkit-box",
            WebkitLineClamp: 2,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}
        >
          {description}
        </Typography>
      </CardContent>

      <div className="flex flex-col gap-2 sm:flex-row sm:justify-between">
        <CardOverflow sx={{ p: 1.5, pt: 0, flex: 1 }}>
          <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
            <Button
              fullWidth
              startDecorator={<Add />}
              onClick={() => {
                onAddToCart();
              }}
            >
              {" "}
              {availabilityStatus ? "Add to Cart" : "Unavailable"}
            </Button>
          </Box>
        </CardOverflow>

        <CardOverflow sx={{ p: 1.5, pt: 0, flex: 1 }}>
          <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
            <Link to={`product/${product.id}`} state={{ product }}>
              <Button endDecorator={<KeyboardArrowRight />} color="success">
                {" "}
                {availabilityStatus ? "View   " : "Unavailable"}
              </Button>
            </Link>
          </Box>
        </CardOverflow>
      </div>
    </Card>
  );
}
