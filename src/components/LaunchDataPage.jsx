import { Grid, Button as MaterialButton } from "@mui/material";
import ArrowDownwardSharpIcon from "@mui/icons-material/ArrowDownwardSharp";
import ArrowUpwardSharpIcon from "@mui/icons-material/ArrowUpwardSharp";
import Pagination from "@mui/material/Pagination";

import { Error } from "./Error";
import { SearchBox } from "./SearchBox";
import { LoadingSkeleton } from "./Skeleton";
import CardGallery from "./card/CardGallery";

import { useData } from "../hooks/data/useData";
import {
  NO_LAUNCH_DATA_MESSAGE,
  SORT_BY_DATE_LABEL,
  HEADER,
} from "../constants/constants";

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
        <h1>{HEADER}</h1>
        <SearchBox
          ariaLabel="Search for SpaceX Launches by name"
          handlerFunction={handleSearchInput}
          placeholder="Search by Name"
        />
      </Grid>

      <Grid>
        {paginatedData?.length && (
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
            <span style={{ textTransform: "none" }}>{SORT_BY_DATE_LABEL}</span>
          </MaterialButton>
        )}
      </Grid>
      <Grid>
        {paginatedData?.length ? (
          <CardGallery data={paginatedData} />
        ) : (
          <div>{NO_LAUNCH_DATA_MESSAGE}</div>
        )}
        {paginatedData?.length && (
          <Pagination
            count={totalPages}
            page={currentPage}
            size="large"
            onChange={handlePageChange}
            sx={{ display: "flex", justifyContent: "center" }}
          />
        )}
      </Grid>
    </Grid>
  );
};

export default LaunchDataPage;

// TO DO: Add error boundary for better debugging
