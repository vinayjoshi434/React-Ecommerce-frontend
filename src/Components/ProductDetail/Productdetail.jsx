import React from "react";

import { useParams, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { useDispatch } from "react-redux";
import { addItem } from "../../Features/Cart/CartSlice";

import {
  Box,
  Button,
  Chip,
  Divider,
  Skeleton,
  Stack,
  Typography,
  AspectRatio,
} from "@mui/joy";
import ArrowBack from "@mui/icons-material/ArrowBack";
import ShoppingCart from "@mui/icons-material/ShoppingCart";

export default function Productdetail() {
  /* ─── 1. Router bits ──────────────────────────────────────────────── */
  //const { id } = useParams();  // /product/:id

  const { state } = useLocation(); // { product } if navigated via Link
  //or
  //   const location = useLocation();
  //   const initialProduct = location.state?.product;

  //const navigate = useNavigate();

  /* ─── 2. Local state ─────────────────────────────────────────────── */
  const [product, setProduct] = useState(state?.product);

  //   const [loading, setLoading] = useState(!state?.product);
  //   const [error, setError] = useState(null);

  const {
    thumbnail,
    title,
    price,
    description,
    category,
    brand,
    rating,
    availabilityStatus,
    stock,
    shippingInformation,
    reviews,
  } = product;

  const dispatch = useDispatch();

  return (
    <>
      <Box maxWidth={960} mx="auto" p={4}>
        {/* back button */}
        <Link to="/">
          <Button
            variant="soft"
            size="sm"
            startDecorator={<ArrowBack />}
            sx={{ mb: 2 }}
            onClick={() => navigate(-1)}
          >
            Back
          </Button>
        </Link>
        <Stack
          direction={{ xs: "column", sm: "row" }}
          spacing={4}
          alignItems="stretch"
        >
          {/* image */}
          <AspectRatio
            ratio="4 / 3"
            sx={{ flex: { sm: 1 }, borderRadius: 12, overflow: "hidden" }}
          >
            <img src={thumbnail} alt={title} loading="lazy" />
          </AspectRatio>

          {/* details */}
          <Box flex={{ sm: 1 }} minWidth={0}>
            <Typography
              level="h2"
              fontWeight="lg"
              mb={1}
              fontFamily="sans-serif"
            >
              {title}
            </Typography>

            <Stack direction="row" spacing={3} mb={2} flexWrap="wrap">
              <Chip color="primary" variant="soft" size="md">
                {category}
              </Chip>
              <Chip size="md" variant="soft">
                {brand}
              </Chip>
              {rating && (
                <Chip size="md" variant="outlined">
                  ⭐ {rating}
                </Chip>
              )}
            </Stack>

            <Typography level="h3" color="success" mb={2}>
              ₹{price.toLocaleString()}
            </Typography>

            <Divider sx={{ my: 2 }} />

            <Stack direction="row" spacing={3} mb={2} flexWrap="wrap">
              <Chip color="primary" variant="soft" size="sm">
                {availabilityStatus}
              </Chip>
              <Chip size="sm" variant="soft">
                {stock}
              </Chip>
              {rating && (
                <Chip size="sm" variant="outlined">
                  {shippingInformation}
                </Chip>
              )}
            </Stack>

            <Typography level="body-md" sx={{ whiteSpace: "pre-wrap" }} mb={3}>
              {description}
            </Typography>

            <Button
              variant="solid"
              color="success"
              fullWidth
              startDecorator={<ShoppingCart />}
              disabled={!availabilityStatus}
              onClick={() => dispatch(addItem(product))}
              sx={{ py: 1.5 }}
            >
              {availabilityStatus ? "Add to Cart" : "Out of Stock"}
            </Button>
          </Box>
        </Stack>
      </Box>

      {/* ───────────── Reviews Section ───────────── */}
      <section className="max-w-3xl mx-auto px-4 py-6">
        <h2 className="text-2xl font-semibold mb-4">Customer Reviews</h2>

        {reviews.length === 0 ? (
          <p className="text-gray-500 italic">No reviews yet.</p>
        ) : (
          <ul className="space-y-4">
            {reviews.map((review, index) => (
              <li
                key={index}
                className="border border-gray-200 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow"
              >
                {/* Header */}
                <div className="flex items-center justify-between mb-2">
                  <div className="text-sm font-medium text-gray-800">
                    {review.reviewerName}
                  </div>
                  <div className="text-sm text-gray-500">
                    {review.date.toLocaleString()}
                  </div>
                </div>

                {/* Rating */}
                <div className="flex items-center mb-2">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <svg
                      key={i}
                      className={`w-4 h-4 mr-1 ${
                        i < review.rating ? "text-yellow-400" : "text-gray-300"
                      }`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.956h4.162c.969 0 1.371 1.24.588 1.81l-3.37 2.448 1.286 3.955c.3.922-.755 1.688-1.54 1.118L10 13.347l-3.372 2.447c-.785.57-1.84-.196-1.54-1.118l1.286-3.955-3.37-2.448c-.783-.57-.38-1.81.588-1.81h4.162l1.286-3.956z" />
                    </svg>
                  ))}
                </div>

                {/* Comment */}
                <p className="text-sm text-gray-700">{review.comment}</p>
              </li>
            ))}
          </ul>
        )}
      </section>
    </>
  );
}
