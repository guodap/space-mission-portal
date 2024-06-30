import { Grid, Button as MaterialButton } from "@mui/material";
import ArrowUpwardSharpIcon from "@mui/icons-material/ArrowUpwardSharp";
import ArrowDownwardSharpIcon from "@mui/icons-material/ArrowDownwardSharp";
import Pagination from "@mui/material/Pagination";

import { Error } from "./Error";
import { LoadingSkeleton } from "./Skeleton";
import CardGallery from "./card/CardGallery";
import { SearchBox } from "./SearchBox";

import { useData } from "../hooks/data/useData";

import "./LaunchDataPage.css";

const LaunchDataPage = () => {
  const {
    paginatedData,
    loading,
    error,
    sortOrder,
    toggleSortOrder,
    currentPage,
    totalPages,
    handlePageChange,
    handleSearchInput,
  } = useData();

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
        {paginatedData?.length ? (
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
        {paginatedData?.length ? (
          <CardGallery data={paginatedData} />
        ) : (
          <div>No launch data matched your input</div>
        )}
        {paginatedData?.length ? (
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
