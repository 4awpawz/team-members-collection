/*
dataDependencies: team
*/
module.exports = ({ $tag, site }) => {
    site.dataCatalog.team.forEach(item => {
        $tag.append(/* html */ `
            <li><a href="${item.firstName} ${item.lastName}">${item.firstName} ${item.lastName}</a></li>
        `);
    });
};
