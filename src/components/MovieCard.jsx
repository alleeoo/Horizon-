import React, { useState } from "react";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Box,
  Rating,
  Chip,
} from "@mui/material";

const fallbackImg = "https://via.placeholder.com/250x350?text=No+Image";

const MovieCard = ({ title, image, rating, year, genre }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [imgError, setImgError] = useState(false);

  return (
    <Card
      sx={{
        width: 250,
        transition: "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
        transform: isHovered ? "scale(1.05)" : "scale(1)",
        boxShadow: isHovered
          ? "0 8px 16px rgba(0, 0, 0, 0.2)"
          : "0 2px 8px rgba(0, 0, 0, 0.1)",
        bgcolor: "background.paper",
        "&:hover": {
          cursor: "pointer",
        },
        overflow: "hidden",
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <CardMedia
        component="img"
        height="350"
        image={imgError ? fallbackImg : image}
        alt={title}
        onError={() => setImgError(true)}
        sx={{
          transition: "transform 0.3s ease-in-out",
          transform: isHovered ? "scale(1.05)" : "scale(1)",
        }}
      />
      <CardContent sx={{ p: 2 }}>
        <Typography
          variant="h6"
          component="h3"
          sx={{
            mb: 1,
            color: "text.primary",
            fontWeight: 600,
            fontSize: "1rem",
            lineHeight: 1.2,
            height: "2.4em",
            overflow: "hidden",
            display: "-webkit-box",
            WebkitLineClamp: 2,
            WebkitBoxOrient: "vertical",
          }}
        >
          {title}
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: 1,
          }}
        >
          <Typography
            variant="body2"
            sx={{
              color: "text.secondary",
              flex: "0 0 auto",
            }}
          >
            {year}
          </Typography>
          <Chip
            label={genre}
            size="small"
            sx={{
              bgcolor: "primary.main",
              color: "primary.contrastText",
              "&:hover": {
                bgcolor: "primary.dark",
              },
              maxWidth: "100%",
              height: "24px",
              "& .MuiChip-label": {
                px: 1,
                fontSize: "0.75rem",
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
              },
            }}
          />
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 0.5,
              flex: "0 0 auto",
            }}
          >
            <Rating
              value={rating}
              precision={0.5}
              readOnly
              size="small"
              sx={{ color: "primary.main" }}
            />
            <Typography
              variant="body2"
              sx={{ color: "primary.main", fontWeight: 600 }}
            >
              {rating}
            </Typography>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};

export default MovieCard;
