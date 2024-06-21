import PropTypes from "prop-types";
import DataTable from "react-data-table-component";

export const Table = ({ data, columns }) => {
  return <DataTable columns={columns} data={data} />;
};

Table.propTypes = {
  columns: PropTypes.array.isRequired,
  data: PropTypes.array.isRequired,
};
