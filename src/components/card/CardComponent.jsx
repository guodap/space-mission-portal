import * as React from "react";
import CardActions from "@mui/material/CardActions";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import { CardOverflow } from "@mui/joy";
import Chip from "@mui/joy/Chip";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import YouTubeIcon from "@mui/icons-material/YouTube";
import { useMediaQuery } from "@mui/material";

import { Box } from "@mui/material";

import spaceXLogo from "./spaceXLogo.png";

//NOTE - joy is beta release. Find alternative?

const CardComponent = ({
  id,
  name,
  description,
  date,
  imagePath,
  link,
  linkName,
  status,
}) => {
  const isSmallScreen = useMediaQuery("(max-width: 600px)");

  return (
    <Grid
      container
      spacing={0}
      alignItems="center"
      sx={{
        flexWrap: "wrap",
        width: "100%",
        minWidth: isSmallScreen ? "100%" : "500px",
        margin: "0 auto",
      }}
    >
      <Card
        size="sm"
        className="card"
        key={id}
        orientation="horizontal"
        sx={{
          width: "100%",
          maxWidth: "1000px",
          alignItems: "center",
          display: "flex",
          flexDirection: isSmallScreen ? "column" : "row",
          margin: "8px",
          flexGrow: 1,
        }}
      >
        <CardMedia
          component="img"
          alt={name}
          sx={{
            width: "100px",
            height: "auto",
            margin: "10px",
            left: "auto",
            right: "auto",
          }}
          image={imagePath ? imagePath : spaceXLogo}
        />
        <Grid sx={{ width: "200px" }}>
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
              marginBottom: "8px",
            }}
          >
            {status}
          </Chip>
        </Grid>
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{
            width: isSmallScreen ? "100%" : "50%",
            overflow: "hidden",
            textOverflow: "ellipsis",
            display: "-webkit-box",
            WebkitBoxOrient: "vertical",
            // WebkitLineClamp: "10", // Adjust the number of lines to display
          }}
        >
          {description}
        </Typography>
        <IconButton
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="YouTube link"
          sx={{
            color: "red",
            fontSize: "40px",
            alignItems: "center",
            marginLeft: "5%",
            marginRight: "5%",
          }}
        >
          <YouTubeIcon fontSize="inherit" />
        </IconButton>
      </Card>
    </Grid>
  );
};

export default CardComponent;
