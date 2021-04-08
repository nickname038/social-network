
const state = {
    dialogsPage: {
        dialogs: [
            { name: 'Yulia', id: 1 },
            { name: 'Jenia', id: 2 },
            { name: 'Valera', id: 3 },
            { name: 'Valera', id: 4 },
            { name: 'Masha', id: 5 },
        ],
        messages: [
            { message: 'Hi', id: 1, owner: 0, isFirstInBlock: true},
            { message: 'Hello', id: 2, owner: 0, isFirstInBlock: false},
            { message: 'YO', id: 3, owner: 1, isFirstInBlock: true},
            { message: 'Pink Pig', id: 4, owner: 1, isFirstInBlock: false},
            { message: 'Masha', id: 5, owner: 0, isFirstInBlock: true},
        ],
    },
    profilePage: {
        posts: [
            { message: 'Hi! How are you?', id: 1, likesCount: 11 },
            { message: 'It\'s ok', id: 2, likesCount: 15 },
        ],
    },
}

export default state;
