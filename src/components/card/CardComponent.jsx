import * as React from "react";
import CardActions from "@mui/material/CardActions";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import { CardOverflow } from "@mui/joy";
import Chip from "@mui/joy/Chip";
import IconButton from "@mui/material/IconButton";
import YouTubeIcon from "@mui/icons-material/YouTube";
import { Box } from "@mui/material";

//NOTE - joy is beta release. Find alternative?

const CardComponent = ({
  id,
  name,
  description,
  date,
  image,
  link,
  linkName,
  status,
}) => {
  return (
    // need better key?
    <Card
      size="sm"
      className="card"
      key={id}
      orientation="horizontal"
      sx={{ maxWidth: "100%", width: "100%" }}
    >
      <CardMedia
        component="img"
        alt={name}
        sx={{ width: 100, height: 100 }}
        image={image}
      />
      <CardContent sx={{ display: "flex", alignItems: "center", padding: 1 }}>
        <Box display="flex" alignItems="center">
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            sx={{ width: "150px", marginRight: "8px" }}
          >
            <Typography gutterBottom variant="subtitle1" component="div">
              {date}
            </Typography>
            <Typography gutterBottom variant="h5" component="div">
              {name}
            </Typography>
            <Chip
              color={status === "Success" ? "success" : "warning"}
              size="sm"
              sx={{
                borderRadius: "sm",
                py: 0.25,
                px: 0.5,
              }}
            >
              {status}
            </Chip>
          </Box>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{
              width: "300px",
              height: "100%",
              overflow: "hidden",
              textOverflow: "ellipsis",
              display: "-webkit-box",
              WebkitBoxOrient: "vertical",
              WebkitLineClamp: "10", // Adjust the number of lines to display
            }}
          >
            {description}
          </Typography>
        </Box>
      </CardContent>
      <IconButton
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="YouTube link"
        sx={{ color: "red", fontSize: "32px" }}
      >
        <YouTubeIcon fontSize="inherit" />
      </IconButton>
    </Card>
  );
};

export default CardComponent;
