import { timestampToDate } from "../../utils/formatDate";
import CardComponent from "./CardComponent";

const CardGallery = ({ data }) => {
  return (
    <>
      {data.map((launch) => (
        <CardComponent
          id={launch.id}
          name={launch.name}
          description={launch.details}
          date={timestampToDate(launch.date_local)}
          imagePath={launch.links.patch.small}
          link={launch.links.webcast}
          linkName={"Youtube"}
          status={launch.success ? "Success" : "Failure"}
        />
      ))}
    </>
  );
};

export default CardGallery;
