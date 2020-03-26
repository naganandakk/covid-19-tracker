import React from "react";
import DataTable from "react-data-table-component";
import TableColumns from "./TableColumns";
import './CountryTable.css'

class CountryTable extends React.Component {

    render() {
        return(
            <div className="row">
                <div className="col-lg-12 country-table-title">
                    STATISTICS BY COUNTRY
                </div>
                <div className="col-lg-12">
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
                        paginationComponentOptions={{
                            rowsPerPageText: '',
                        }}
                    />
                </div>
            </div>
        );
    }
}

export default CountryTable;