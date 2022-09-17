var fs = require('fs');

var stays = JSON.parse(fs.readFileSync('data/stays.json', 'utf8'));

/* GET rooms view */
const rooms = (req, res) => {
    pageTitle = process.env.npm_package_description + " - Rooms";
    res.render('rooms', {title: pageTitle, stays });
};

module.exports = {
    rooms
};