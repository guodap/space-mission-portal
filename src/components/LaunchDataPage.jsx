import { Grid, Button as MaterialButton } from "@mui/material";
import ArrowUpwardSharpIcon from "@mui/icons-material/ArrowUpwardSharp";
import ArrowDownwardSharpIcon from "@mui/icons-material/ArrowDownwardSharp";
import Pagination from "@mui/material/Pagination";

import { Error } from "./Error";
import { TableSkeleton } from "./Skeleton";
import CardGallery from "./card/CardGallery";
import { SearchBox } from "./SearchBox";

import { useData } from "../hooks/useData";
import { usePagination } from "../hooks/usePagination";

import "./LaunchDataPage.css";
import { API_URL } from "../constants/constants";
import { useDataSort } from "../hooks/useDataSort";

const LaunchDataPage = () => {
  const { data, loading, error, searchByName } = useData(API_URL);

  const { sortedData, sortOrder, toggleSortOrder } = useDataSort(data);
  const { paginatedData, totalPages, setCurrentPage } = usePagination(
    sortedData,
    sortOrder
  );

  const handlePageChange = (event, page) => {
    setCurrentPage(page);
  };

  const handleSearchInput = (input) => {
    searchByName(input);
    setCurrentPage(1);
  };

  const foundData = paginatedData && paginatedData.length;

  if (loading) return <TableSkeleton />;
  // if (!totalPages) return <TableSkeleton />;
  if (error) return <Error />;

  return (
    <>
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
          <Grid>
            {foundData && (
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
            <Pagination
              count={totalPages}
              size="large"
              onChange={handlePageChange}
              sx={{
                display: "flex",
                justifyContent: "center",
                left: "100%",
                right: "100%",
              }}
            />
          </Grid>
        </Grid>
      </Grid>
    </>
  ); //add error boundary to debug better
};

export default LaunchDataPage;
