import React from "react";
import DataTable from "react-data-table-component";
import TableColumns from "./TableColumns";

class CountryTable extends React.Component {

    render() {
        return(
            <DataTable
                columns={TableColumns}
                data={this.props.statistics}
                pagination={true}
                paginationPerPage={10}
                defaultSortField={'cases.total'}
                defaultSortAsc={false}
                highlightOnHover={true}
                dense={true}
            />
        );
    }
}

export default CountryTable;