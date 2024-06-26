import { useState } from "react";
import { Grid, Button as MaterialButton } from "@mui/material";
import ArrowUpwardSharpIcon from "@mui/icons-material/ArrowUpwardSharp";
import ArrowDownwardSharpIcon from "@mui/icons-material/ArrowDownwardSharp";

import { Error } from "./Error";
import { TableSkeleton } from "./Skeleton";
import CardGallery from "./card/CardGallery";
import { Button } from "./Button";
import { SearchBox } from "./SearchBox";

import { useData } from "../hooks/useData";
import { usePagination } from "../hooks/usePagination";
import { sortByTimestamp } from "../utils/sortData";

import "./LaunchDataPage.css";
import { API_URL } from "../constants/constants";

const LaunchDataPage = () => {
  const { data, loading, error, searchByName } = useData(API_URL);

  const [sortOrder, setSortOrder] = useState("descending");
  const sortedData = sortByTimestamp(data, sortOrder);

  const {
    currentPage,
    paginatedData,
    totalPages,
    canGetNext,
    canGetPrevious,
    getNext,
    getPrevious,
  } = usePagination(sortedData);

  const toggleSortOrder = () => {
    const newSortOrder = sortOrder === "ascending" ? "descending" : "ascending";
    setSortOrder(newSortOrder);
    const sortedData = sortByTimestamp(data, newSortOrder);
    setPaginatedData(sortedData);
  };

  if (loading) return <TableSkeleton />;
  if (error) return <Error />;

  const foundData = paginatedData && paginatedData.length;

  return (
    <>
      <Grid container sx={{ flexDirection: "column", width: "100%" }}>
        <Grid>
          <Grid>
            <h1>SpaceX Launches</h1>
          </Grid>
          <Grid>
            <SearchBox
              placeholder="Search by Name"
              ariaLabel="Search for SpaceX Launches by name"
              handlerFunction={searchByName}
            />
          </Grid>
          <Grid>
            {foundData && (
              <MaterialButton
                variant="text"
                sx={{
                  color: "black",
                  margin: "10px 20px 10px 0",
                  float: "right",
                }}
                onClick={toggleSortOrder}
              >
                {sortOrder === "ascending" ? (
                  <ArrowUpwardSharpIcon />
                ) : (
                  <ArrowDownwardSharpIcon />
                )}
                Sort by Date
              </MaterialButton>
            )}
          </Grid>
        </Grid>

        {/* Note: Should restrict card gallery size as buttons bounce around page onClick and scroll is necessary ATM*/}
        {/* BUG: After filtration, restore currentPage to 1 */}
        <Grid>
          <Grid>
            {foundData ? (
              <CardGallery data={paginatedData} />
            ) : (
              <div>No launch data found</div>
            )}
          </Grid>
          <Grid>
            <Button
              disabled={!canGetPrevious}
              onClick={getPrevious}
              label={"Previous"}
            />
            <Button disabled={!canGetNext} onClick={getNext} label={"Next"} />
            {totalPages ? (
              <div> {`Page: ${currentPage}/${totalPages}`}</div>
            ) : null}
          </Grid>
          {/* <Grid>
            <Breadcrumb />
          </Grid> */}
        </Grid>
      </Grid>
    </>
  ); //add error boundary to debug better
};

export default LaunchDataPage;
