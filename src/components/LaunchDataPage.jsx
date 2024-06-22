import { useData } from "../hooks/useData";

import CardGallery from "./card/CardGallery";
import LaunchRecordsTable from "./table/LaunchRecordsTable";

import { Error } from "./Error";
import { TableSkeleton } from "./Skeleton";

export const LaunchDataPage = () => {
  const { data, loading, error } = useData(
    "https://api.spacexdata.com/v4/launches"
  );

  //API returned no results state?
  //Calling hook for both Card and Table, can put in one page component?
  if (loading) return <TableSkeleton />;
  if (error) return <Error />;

  return (
    <>
      <h1>SpaceX Launches</h1>
      <CardGallery data={data} />
      {/* <LaunchRecordsTable data={data} /> */}
    </>
  ); //add error boundary to debug better
};

export default LaunchDataPage;
