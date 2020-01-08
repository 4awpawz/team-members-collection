module.exports = ({ $tag, $page, asset }) => {
    const data = asset.collection.data;
    $page("title").append(` ${data.firstName} ${data.lastName}`);
    $tag.find("#page-title").append(` #${asset.collection.index + 1}`);
    $tag.find("#name").append(`${data.firstName} ${data.lastName}`);
    $tag.find("#title").append(data.title);
    $tag.find("#bio").append(data.bio);
};
