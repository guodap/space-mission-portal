import { Table } from "./Table";
import { timestampToDate } from "../../utils/formatDate";

const LaunchRecordsTable = ({ data }) => {
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
        row.links.webcast ? <a href={row.links.webcast}>Youtube Link</a> : null, //Display in a more visually appealing way?
    },
  ];

  return <Table data={data} columns={columns} />;
};

export default LaunchRecordsTable;
