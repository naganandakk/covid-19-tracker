import React from "react";
import DataTable from "react-data-table-component";
import TableColumns from "./TableColumns";
import './CountryTable.css';

class CountryTable extends React.Component {

    render() {
        return(
            <div className="row">
                <div className="col-lg-12">
                    {this.renderAffectedCountriesCount()}
                    {this.renderTable()}
                </div>
            </div>
        );
    }

    renderAffectedCountriesCount() {
        return(
            <div className="text-right">
                <p className="affected-countries-count">{this.props.statistics.length} COUNTRIES AFFECTED</p>
            </div>
        );
    }

    renderTable() {
        return (
            <div className="country-table-wrapper">
                <DataTable
                    className="country-table"
                    columns={TableColumns}
                    data={this.props.statistics}
                    defaultSortField={'cases.total'}
                    defaultSortAsc={false}
                    highlightOnHover={true}
                    dense={true}
                    noHeader={true}
                />
            </div>
        );
    }
}

export default CountryTable;