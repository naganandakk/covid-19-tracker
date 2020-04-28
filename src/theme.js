const commonStyles = {
    typography: {
        fontFamily: [
            'Comfortaa', 'cursive'
        ].join(',')
    },
    overrides: {
        MUIDataTable: {
            paper: {
                overflowX: "auto"
            }
        }
    }
}

export const DefaultTheme = {
    ...commonStyles
};

export const DarkTheme ={
    ...commonStyles,
    palette: {
        type: "dark"
    }
};
