const smartgrid = require('smart-grid')

module.exports = function grid(done) {
    smartgrid('app/styles/_libs/',  {
        outputStyle: "sass",
        filename: "_smart-grid",
        columns: 12, // number of grid columns
        offset: "60px", // gutter width
        mobileFirst: false,
        detailedCalc: true,
        container: {
            maxWidth: "1560px",
            fields: "15px" // side fields
        },
        breakPoints: {
            xs: {
                width: "320px"
            },
            sm: {
                width: "576px"
            },
            md: {
                width: "768px"
            },
            lg: {
                width: "992px"
            },
            xl: {
                width: "1200px"
            },
            large: {
                width: "1560px"
            }
        }
    })

    done()
}