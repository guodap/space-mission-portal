import PropTypes from "prop-types";
import CardActions from "@mui/material/CardActions";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";

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
    <Card key={id} orientation="horizontal" x={{ maxWidth: 345 }}>
      {/* add default image? */}
      <CardMedia component="img" alt={name} sx={{ width: 151 }} image={image} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        <Typography gutterBottom variant="h10" component="div">
          {date}
        </Typography>
        <Typography variant="body5" color="text.secondary">
          {status}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button src={link} size="small">
          {linkName}
        </Button>
      </CardActions>
    </Card>
  );
};

export default CardComponent;

CardComponent.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  linkName: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
};
