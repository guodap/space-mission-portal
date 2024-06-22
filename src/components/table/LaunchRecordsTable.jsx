import CancelIcon from "@mui/icons-material/Cancel";

import { Table } from "./Table";
import { Error } from "../Error";
import { TableSkeleton } from "../Skeleton";

import { timestampToDate } from "../../utils/formatDate";
import { useData } from "../../hooks/useData";

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
      name: "Date",
      selector: (row) => row.date_local,
      sortable: true,
      cell: (row) => timestampToDate(row.date_local), //what does local date mean? Is time important?
    },
    {
      name: "Status",
      selector: (row) => (row.success ? "Success" : "Failure"), //Display in a more visually appealing way?
    },
    //{
    //  name: "Launch Details",
    //  selector: (row) => row.details, //Failing, why?
    //},
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
    //Display in a more visually appealing way?
    //Embedded mode?
    //Open in another tab?
    {
      name: "Link",
      selector: (row) => row.links.webcast,
      cell: (row) =>
        row.links.webcast ? <a href={row.links.webcast}>Youtube Link</a> : null,
    },
  ];

  //API returned no results state?
  //Calling hook in both Card and Table, can put in one page component?
  if (loading) return <TableSkeleton />;
  if (error) return <Error />;

  return <Table data={data} columns={columns} />;
};

export default LaunchRecordsTable;
