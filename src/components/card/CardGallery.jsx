import PropTypes from "prop-types";
import CardComponent from "./CardComponent";

const CardGallery = ({ data }) => {
  return (
    <>
      {data.map(({ id, name, description, date, imagePath, link, status }) => (
        <CardComponent
          key={id}
          name={name}
          description={description}
          date={date}
          imagePath={imagePath}
          link={link}
          status={status}
        />
      ))}
    </>
  );
};

CardGallery.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      description: PropTypes.string,
      date: PropTypes.string.isRequired,
      imagePath: PropTypes.string.isRequired,
      link: PropTypes.string,
      status: PropTypes.string.isRequired,
    })
  ),
};

export default CardGallery;
