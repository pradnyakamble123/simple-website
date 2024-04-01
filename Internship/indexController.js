exports.getIndex = (req, res) => {
    res.sendFile(__dirname + '/../frontend/index.html');
};
