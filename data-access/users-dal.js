var mockedUsers = [
    {
        id: 1,
        name: 'Dawid'
    },
    {
        id: 2,
        name: 'Jacek'
    },
    {
        id: 3,
        name: 'Michal'
    },
    {
        id: 4,
        name: 'Kamil'
    },
    {
        id: 5,
        name: 'Wojtek'
    },
];

module.exports.find = function (id) {
    return mockedUsers.filter((item) => {
        return item.id == id;
    })
}

module.exports.findAll = function () {
    return mockedUsers;
}
