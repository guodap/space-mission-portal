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
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justify="center"
      // style={{ minHeight: "100vh" }}
    >
      <Card
        size="sm"
        className="card"
        key={id}
        orientation="horizontal"
        sx={{ width: "80%", alignItems: "center" }}
      >
        {/* add default image? */}
        <CardMedia
          component="img"
          alt={name}
          sx={{
            width: "100px",
            height: "100px",
            position: "left",
            marginLeft: "1%",
            marginRight: "1%",
          }}
          image={image}
        />
        <CardContent sx={{ display: "flex", alignItems: "center", padding: 1 }}>
          <Grid display="flex" alignItems="center" sx={{ width: "100%" }}>
            <Grid
              display="flex"
              flexDirection="column"
              alignItems="center"
              sx={{
                width: "25%",
                marginRight: "10px",
                marginLeft: "10px",
              }}
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
            </Grid>
            <Grid
              sx={{
                alignItems: "center",
                width: "100%",
                height: "100%",
                textAlign: "center",
                marginLeft: "5%",
                marginRight: "5%",
              }}
            >
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  display: "-webkit-box",
                  WebkitBoxOrient: "vertical",
                  WebkitLineClamp: "10", // Adjust the number of lines to display
                }}
              >
                {description}
              </Typography>
            </Grid>
            <Grid>
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
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default CardComponent;
