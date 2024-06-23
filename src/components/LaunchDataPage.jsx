import { Error } from "./Error";
import { TableSkeleton } from "./Skeleton";
import CardGallery from "./card/CardGallery";
import { Button } from "./Button";
import { SearchBox } from "./SearchBox";

import { useData } from "../hooks/useData";
import { usePagination } from "../hooks/usePagination";

import "./LaunchDataPage.css";

export const LaunchDataPage = () => {
  const { data, loading, error, searchByName } = useData(
    "https://api.spacexdata.com/v4/launches"
  );

  const perPage = 8;
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
      <SearchBox
        placeholder="Search by Name"
        ariaLabel="Search for SpaceX Launches by name"
        handlerFunction={searchByName}
      />
      <CardGallery data={paginatedData} />
      {/* Note: Should restrict card gallery size as buttons bounce around page onClick and scroll is necessary ATM*/}
      {/* BUG: After filtration, restore currentPage to 1 */}
      <Button
        disabled={!canGetPrevious}
        onClick={getPrevious}
        label={"Previous"}
      />
      <Button disabled={!canGetNext} onClick={getNext} label={"Next"} />
      {totalPages ? <div> {`Page: ${currentPage}/${totalPages}`}</div> : null}
    </>
  ); //add error boundary to debug better
};

export default LaunchDataPage;
