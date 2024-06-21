import CancelIcon from "@mui/icons-material/Cancel";

import { Table } from "./Table";
import { Error } from "./Error";
import { TableSkeleton } from "./Skeleton";

import { timestampToDate } from "../utils/formatDate";
import { useData } from "../hooks/useData";

const LaunchRecordsTable = () => {
  const { data, loading, error } = useData(
    "https://api.spacexdata.com/v4/launches"
  );
  const columns = [
    {
      name: "Launch Name",
      selector: (row) => row.name,
      sortable: true,
    },
    {
      name: "Local Date",
      selector: (row) => row.date_local,
      sortable: true,
      cell: (row) => timestampToDate(row.date_local),
    },
    {
      name: "Status",
      selector: (row) => (row.success ? "Success" : "Failure"), //Display in a more visually appealing way?
    },
    {
      name: "Image",
      selector: (row) => row.links.patch.small,
      cell: (row) =>
        row.links.patch.small ? (
          <img
            height={30}
            width={30}
            alt={`Image of ${row.name}`}
            src={row.links.patch.small}
          ></img>
        ) : null,
    },
    {
      name: "Link",
      selector: (row) => row.links.webcast,
      cell: (row) =>
        row.links.webcast ? <a href={row.links.webcast}>Youtube Link</a> : null, //Display in a more visually appealing way?
    },
  ];

  //API returned no results state?
  if (loading) return <TableSkeleton />;
  if (error) return <Error />;

  return <Table data={data} columns={columns} />;
};

export default LaunchRecordsTable;
