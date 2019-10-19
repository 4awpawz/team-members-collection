/*
dataDependencies: team
*/
module.exports = ({ $tag, site }) => {
    site.dataCatalog.team.forEach(item => {
        const url = encodeURI(`/${item.firstName} ${item.lastName}`);
        $tag.append(/* html */ `
            <li><a data-trio-link href="${url.toLowerCase()}">${item.firstName} ${item.lastName}</a></li>
        `);
    });
};
