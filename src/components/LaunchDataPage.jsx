import { Error } from "./Error";
import { TableSkeleton } from "./Skeleton";
import CardGallery from "./card/CardGallery";
import LaunchRecordsTable from "./table/LaunchRecordsTable";
import { Button } from "./Button";

import { useData } from "../hooks/useData";
import { usePagination } from "../hooks/usePagination";

export const LaunchDataPage = () => {
  const { data, loading, error } = useData(
    "https://api.spacexdata.com/v4/launches"
  );

  const perPage = 5;
  const {
    currentPage,
    paginatedData,
    totalPages,
    canGetNext,
    canGetPrevious,
    getNext,
    getPrevious,
  } = usePagination(data, perPage);

  //API returned no results state?
  //Calling hook for both Card and Table, can put in one page component?
  if (loading) return <TableSkeleton />;
  if (error) return <Error />;
  if (!data || !paginatedData) return <div>No data</div>;

  return (
    <>
      <h1>SpaceX Launches</h1>
      <CardGallery data={paginatedData} />
      {/* <LaunchRecordsTable data={paginatedData} /> */}
      {/* Note: Should restrict card gallery size as buttons bounce around page onClick and scroll is necessary ATM, table okay*/}
      <Button
        disabled={!canGetPrevious}
        onClick={getPrevious}
        label={"Previous"}
      />
      <Button disabled={!canGetNext} onClick={getNext} label={"Next"} />
      <div>{`Page: ${currentPage}/${totalPages}`}</div>
    </>
  ); //add error boundary to debug better
};

export default LaunchDataPage;
