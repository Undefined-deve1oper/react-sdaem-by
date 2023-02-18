import useBreadcrumbs from "use-react-router-breadcrumbs";
import { textCropper } from "../../../utils/helpers";

const postTitlesById: any = {
    "63f0fdb2256b22a675dbcbeb": "Аренда квартиры посуточно",
    "63f0fdb2256b22a675dbcbea":
        "Линия Сталина: суровый отдых в усадьбах на сутки",
    "63f0fdb2256b22a675dbcbec": "Дворцово-парковый комплекс Чапских",
    "63f0fdb2256b22a675dbcbef": `"Плюсы" аренды квартир на сутки`,
    "63f0fdb2256b22a675dbcbf1": "Зачем арендовать авто?",
    "63f0fdb2256b22a675dbcbf0":
        "Преимущества квартир на сутки перед гостиницей",
    "63f0fdb2256b22a675dbcbf2": "Прокат машин",
    "63f0fdb2256b22a675dbcbf3": "Как найти комфортное жильё в командировке?",
    "63f0fdb2256b22a675dbcbf4": "Где же остановиться?",
    "63f0fdb2256b22a675dbcbf6": "Аренда усадьбы",
    "63f0fdb2256b22a675dbcbf5": "Квартира посуточно: нюансы выбора",
    "63f0fdb2256b22a675dbcbf7":
        "Агроусадьба для инвалидов с безбарьерной средой",
    "63f0fdb2256b22a675dbcbf8": "Усадьба в аренду",
    "63f0fdb2256b22a675dbcbf9":
        "Квартиры посуточно – это самый удобный и недорогой способ для размещения командировочных и туристов.",
    "63f0fdb2256b22a675dbcbfb": "Деловая поездка в незнакомый город",
    "63f0fdb2256b22a675dbcbfa":
        "Альтернатива хостелу, более дорогая, но и более комфортная – квартиры посуточно",
    "63f0fdb2256b22a675dbcbfc":
        "Аренда сауны на сутки – это прекрасный вид досуга",
    "63f0fdb2256b22a675dbcbed": "Советы по аренде квартир на сутки",
    "63f0fdb2256b22a675dbcbee":
        "Коттедж на сутки: праздник вдали от шумного города"
};

const DynamicPostsBreadcrumb = ({ match }: any) => {
    const text = postTitlesById[match.params.postId];
    const cropperText = textCropper(text, 56);

    return <span>{cropperText}</span>;
};

export default DynamicPostsBreadcrumb;
