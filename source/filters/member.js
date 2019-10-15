module.exports = ({ site }) =>
    site.dataCatalog.team.map(item =>
        ({ pageName: `${item.firstName} ${item.lastName}`, item }));
