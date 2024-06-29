import PropTypes from "prop-types";
import CardComponent from "./CardComponent";
import { convertTimestampToDate } from "../../utils/formatDate";

const CardGallery = ({ data }) => {
  return (
    <>
      {data.map((launch) => (
        <CardComponent
          key={launch.id}
          name={launch.name}
          description={launch.details}
          date={convertTimestampToDate(launch.date_local)}
          imagePath={launch.links.patch.small}
          link={launch.links.webcast}
          linkName={"Youtube"}
          status={launch.success ? "Success" : "Failure"}
        />
      ))}
    </>
  );
};

CardGallery.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      details: PropTypes.string,
      date_local: PropTypes.string.isRequired,
      links: PropTypes.shape({
        patch: PropTypes.shape({
          small: PropTypes.string,
        }),
        webcast: PropTypes.string,
      }),
      success: PropTypes.bool,
    })
  ),
};

export default CardGallery;
