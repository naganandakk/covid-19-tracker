const numberCellProps = v => {
    return {
        style: {
            textAlign: "right",
        }
    }
}

const renderAsNumber = str => {
    return str.toLocaleString();
}
const columnConfig = [
    {name: "COUNTRY"},
    {
        name: "CONFIRMED",
        options: {
            sortDirection: "desc",
            setCellProps: numberCellProps,
            setCellHeaderProps: numberCellProps,
            customBodyRender: value => renderAsNumber(value)
        }
    },
    {
        name: "ACTIVE",
        options: {
            setCellProps: numberCellProps,
            setCellHeaderProps: numberCellProps,
            customBodyRender: value => renderAsNumber(value)
        }
    },
    {
        name: "RECOVERED",
        options: {
            setCellProps: numberCellProps,
            setCellHeaderProps: numberCellProps,
            customBodyRender: value => renderAsNumber(value)
        }
    },
    {
        name: "DECEASED",
        options: {
            setCellProps: numberCellProps,
            setCellHeaderProps: numberCellProps,
            customBodyRender: value => renderAsNumber(value)
        }
    }
]

export default columnConfig;