export const roomsObject = {
    one: { _id: "67rdca3eeb7f6fgeed471198", name: "1" },
    two: { _id: "67rdca3eeb7f6fgeed471100", name: "2" },
    three: { _id: "67rdca3eeb7f6fgeed4711012", name: "3" },
    four: { _id: "67rdca3eeb7f6fgeed471101", name: "4" }
};
export const rooms = [
    { _id: "67rdca3eeb7f6fgeed471198", name: "1" },
    { _id: "67rdca3eeb7f6fgeed471100", name: "2" },
    { _id: "67rdca3eeb7f6fgeed4711012", name: "3" },
    { _id: "67rdca3eeb7f6fgeed471101", name: "4" }
];
const fetchAll = () =>
    new Promise((resolve) => {
        window.setTimeout(function () {
            resolve(roomsObject);
        }, 2000);
    });

export default {
    fetchAll
};
