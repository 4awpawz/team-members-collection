module.exports = ({ $tag, $page, asset }) => {
    const item = asset.collection.item;
    $page("title").append(` ${item.firstName} ${item.lastName}`);
    $tag.find("#page-title").append(` #${asset.collection.index + 1}`);
    $tag.find("#name").append(`${item.firstName} ${item.lastName}`);
    $tag.find("#title").append(item.title);
    $tag.find("#bio").append(item.bio);
};
