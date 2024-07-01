import { Grid, Button as MaterialButton } from "@mui/material";
import ArrowDownwardSharpIcon from "@mui/icons-material/ArrowDownwardSharp";
import ArrowUpwardSharpIcon from "@mui/icons-material/ArrowUpwardSharp";
import Pagination from "@mui/material/Pagination";

import { useData } from "../hooks/data/useData";
import {
  NO_LAUNCH_DATA_MESSAGE,
  SORT_BY_DATE_LABEL,
  HEADER,
  SEARCH_PLACEHOLDER,
  SEARCH_ARIA_LABEL,
  DEFAULT_SORT_ORDER,
} from "../constants/constants";

import { Error } from "./Error";
import { SearchBox } from "./SearchBox";
import { LoadingSkeleton } from "./Skeleton";
import CardGallery from "./card/CardGallery";

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
          ariaLabel={SEARCH_ARIA_LABEL}
          handlerFunction={handleSearchInput}
          placeholder={SEARCH_PLACEHOLDER}
        />
      </Grid>
      <Grid>
        {paginatedData?.length ? (
          <MaterialButton
            variant="text"
            sx={{
              color: "black",
              float: "right",
              margin: "10px 20px 10px 0",
            }}
            onClick={toggleSortOrder}
          >
            {sortOrder === DEFAULT_SORT_ORDER ? (
              <ArrowDownwardSharpIcon />
            ) : (
              <ArrowUpwardSharpIcon />
            )}
            <span style={{ textTransform: "none" }}>{SORT_BY_DATE_LABEL}</span>
          </MaterialButton>
        ) : null}
      </Grid>
      <Grid>
        {paginatedData?.length ? (
          <CardGallery data={paginatedData} />
        ) : (
          <div>{NO_LAUNCH_DATA_MESSAGE}</div>
        )}
        {paginatedData?.length ? (
          <Pagination
            count={totalPages}
            page={currentPage}
            size="large"
            onChange={handlePageChange}
            sx={{ display: "flex", justifyContent: "center" }}
          />
        ) : null}
      </Grid>
    </Grid>
  );
};

export default LaunchDataPage;

// TO DO: Add error boundary for better debugging
