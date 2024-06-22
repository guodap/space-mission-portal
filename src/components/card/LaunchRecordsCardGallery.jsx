import { useData } from "../../hooks/useData";
import { timestampToDate } from "../../utils/formatDate";

import { Error } from "../Error";
import { TableSkeleton } from "../Skeleton";

import CardComponent from "./CardComponent";

const LaunchRecordCardGallery = () => {
  const { data, loading, error } = useData(
    "https://api.spacexdata.com/v4/launches"
  );

  //API returned no results state?
  //Calling hook for both Card and Table, can put in one page component?
  if (loading) return <TableSkeleton />;
  if (error) return <Error />;

  return (
    <>
      {data.map((launch) => (
        <CardComponent
          name={launch.name}
          description={launch.details}
          date={timestampToDate(launch.date_local)}
          image={launch.links.patch.small}
          link={launch.links.webcast}
          linkName={"Youtube"}
          status={launch.success ? "Success" : "Failure"}
        />
      ))}
    </>
  );
};

export default LaunchRecordCardGallery;
