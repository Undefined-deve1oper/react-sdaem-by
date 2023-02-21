const months = [
    "Января",
    "Февраля",
    "Марта",
    "Апреля",
    "Мая",
    "Июня",
    "Июля",
    "Августа",
    "Сентября",
    "Октября",
    "Ноября",
    "Декабря"
];

export function getFormatDate(data: Date | string) {
    const newDate = new Date(data);
    const date =
        newDate.getDate() < 10 ? `0${newDate.getDate()}` : newDate.getDate();

    const monthIndex = newDate.getMonth();
    const month = months[monthIndex];

    const year = newDate.getFullYear();

    return `${date} ${month} ${year}`;
}

export function getFullYearByTimeStamp(timestamp: any) {
    return Math.floor(timestamp / 1000 / 60 / 60 / 24 / 365);
}
