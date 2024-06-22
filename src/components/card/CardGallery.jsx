import { timestampToDate } from "../../utils/formatDate";
import CardComponent from "./CardComponent";

const CardGallery = ({ data }) => {
  return (
    <>
      {data.map((launch) => (
        <CardComponent
          name={launch.name}
          description={launch.details}
          date={timestampToDate(launch.date_local)}
          image={launch.links.patch.small}
          link={launch.links.webcast}
          linkName={"Youtube"} //Display in a more visually appealing way?
          status={launch.success ? "Success" : "Failure"}
        />
      ))}
    </>
  );
};

export default CardGallery;
