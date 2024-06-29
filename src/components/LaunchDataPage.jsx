import { useCallback } from "react";
import { Grid, Button as MaterialButton } from "@mui/material";
import ArrowUpwardSharpIcon from "@mui/icons-material/ArrowUpwardSharp";
import ArrowDownwardSharpIcon from "@mui/icons-material/ArrowDownwardSharp";
import Pagination from "@mui/material/Pagination";

import { Error } from "./Error";
import { LoadingSkeleton } from "./Skeleton";
import CardGallery from "./card/CardGallery";
import { SearchBox } from "./SearchBox";

import { useData } from "../hooks/useData";
import { usePagination } from "../hooks/usePagination";

import "./LaunchDataPage.css";
import { useDataSort } from "../hooks/useDataSort";

const LaunchDataPage = () => {
  const { data, loading, error, searchByName } = useData();
  const { sortedData, sortOrder, toggleSortOrder } = useDataSort(data);
  const { paginatedData, totalPages, currentPage, setCurrentPage } =
    usePagination(sortedData);

  const handlePageChange = useCallback(
    (event, page) => {
      setCurrentPage(page);
    },
    [setCurrentPage]
  );

  const handleSearchInput = useCallback(
    (input) => {
      searchByName(input);
      setCurrentPage(1);
    },
    [searchByName, setCurrentPage]
  );

  const foundData = !loading && !error && paginatedData && paginatedData.length;

  if (loading) return <LoadingSkeleton />;
  if (error) return <Error />;

  return (
    <Grid container sx={{ flexDirection: "column", width: "100%" }}>
      <Grid>
        <Grid>
          <h1>SpaceX Launches</h1>
        </Grid>
        <Grid>
          <SearchBox
            ariaLabel="Search for SpaceX Launches by name"
            handlerFunction={handleSearchInput}
            placeholder="Search by Name"
          />
        </Grid>
        {foundData ? (
          <Grid>
            <MaterialButton
              variant="text"
              sx={{
                color: "black",
                float: "right",
                margin: "10px 20px 10px 0",
              }}
              onClick={toggleSortOrder}
            >
              {sortOrder === "ascending" ? (
                <ArrowUpwardSharpIcon />
              ) : (
                <ArrowDownwardSharpIcon />
              )}
              <span style={{ textTransform: "none" }}>Sort by Date</span>
            </MaterialButton>
          </Grid>
        ) : null}
      </Grid>

      <Grid>
        {foundData ? (
          <CardGallery data={paginatedData} />
        ) : (
          <div>No launch data matched your input</div>
        )}
        {foundData ? (
          <Pagination
            count={totalPages}
            page={currentPage}
            size="large"
            onChange={handlePageChange}
            sx={{
              display: "flex",
              justifyContent: "center",
            }}
          />
        ) : null}
      </Grid>
    </Grid>
  );
};

export default LaunchDataPage;

// TO DO: Add error boundary for better debugging
