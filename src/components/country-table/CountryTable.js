import React from "react";
import DataTable from "react-data-table-component";
import TableColumns from "./TableColumns";
import './CountryTable.css'

class CountryTable extends React.Component {

    render() {
        return(
            <DataTable
                className="country-table"
                columns={TableColumns}
                data={this.props.statistics}
                pagination={true}
                defaultSortField={'cases.total'}
                defaultSortAsc={false}
                highlightOnHover={true}
                dense={true}
                noHeader={true}
            />
        );
    }
}

export default CountryTable;