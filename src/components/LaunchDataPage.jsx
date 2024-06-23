import { useState } from "react";
import { Button as MaterialButton } from "@mui/material";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

import { Error } from "./Error";
import { TableSkeleton } from "./Skeleton";
import CardGallery from "./card/CardGallery";
import { Button } from "./Button";
import { SearchBox } from "./SearchBox";

import { useData } from "../hooks/useData";
import { usePagination } from "../hooks/usePagination";
import { sortByTimestamp } from "../utils/sortData";

import "./LaunchDataPage.css";

const LaunchDataPage = () => {
  const { data, loading, error, searchByName } = useData(
    "https://api.spacexdata.com/v4/launches"
  );

  const [sortOrder, setSortOrder] = useState("ascending");

  const toggleSortOrder = () => {
    const newSortOrder = sortOrder === "ascending" ? "descending" : "ascending";
    setSortOrder(newSortOrder);
    setPaginatedData(null);
  };

  const sortedData = sortByTimestamp(data, sortOrder);

  const perPage = 10;
  const {
    currentPage,
    paginatedData,
    totalPages,
    canGetNext,
    canGetPrevious,
    getNext,
    getPrevious,
  } = usePagination(sortedData, perPage);

  if (loading) return <TableSkeleton />;
  if (error) return <Error />;

  const foundData = paginatedData && paginatedData.length;

  return (
    <>
      <h1>SpaceX Launches</h1>
      <SearchBox
        placeholder="Search by Name"
        ariaLabel="Search for SpaceX Launches by name"
        handlerFunction={searchByName}
      />
      {foundData && (
        <div>
          <MaterialButton variant="text" onClick={toggleSortOrder}>
            {sortOrder === "ascending" ? (
              <KeyboardArrowDownIcon />
            ) : (
              <KeyboardArrowUpIcon />
            )}
            Sort by date
          </MaterialButton>
        </div>
      )}
      {/* Note: Should restrict card gallery size as buttons bounce around page onClick and scroll is necessary ATM*/}
      {/* BUG: After filtration, restore currentPage to 1 */}
      {foundData ? (
        <CardGallery data={paginatedData} />
      ) : (
        <div>No launch data found</div>
      )}
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
