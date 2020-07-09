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
            small_mobile: {
                width: "375px"
            },
            medium_mobile: {
                width: "425px"
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
            small_laptop: {
                width: "970px"
            },
            xl: {
                width: "1200px"
            },
            small_desktop: {
                width: "1366px"
            },
            medium_desktop: {
                width: "1440px"
            },
            large: {
                width: "1560px"
            }
        }
    })

    done()
}