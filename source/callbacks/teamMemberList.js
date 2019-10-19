/*
dataDependencies: team
*/
module.exports = ({ $tag, site }) => {
    site.dataCatalog.team.forEach(item => {
        $tag.append(/* html */ `
            <li><a data-trio-link href="/${item.firstName} ${item.lastName}">${item.firstName} ${item.lastName}</a></li>
        `);
    });
};
