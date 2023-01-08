export const roomsObject = {
    one: { _id: "67rdca3eeb7f6fgeed471198", name: "1 комн." },
    two: { _id: "67rdca3eeb7f6fgeed471100", name: "2 комн." },
    three: { _id: "67rdca3eeb7f6fgeed4711012", name: "3 комн." },
    four: { _id: "67rdca3eeb7f6fgeed471101", name: "4 комн." }
};
export const rooms = [
    { _id: "67rdca3eeb7f6fgeed471198", name: "1 комн." },
    { _id: "67rdca3eeb7f6fgeed471100", name: "2 комн." },
    { _id: "67rdca3eeb7f6fgeed4711012", name: "3 комн." },
    { _id: "67rdca3eeb7f6fgeed471101", name: "4 комн." }
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
