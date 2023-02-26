import queryString from "query-string";
import React from "react";
import { NavLink, useLocation, useParams } from "react-router-dom";
import useBreadcrumbs from "use-react-router-breadcrumbs";
import routes from "../../../router";
import { getUserById, useStateSelector } from "../../../store";
import { textCropper } from "../../../utils/helpers";
import IconSvg from "../IconSvg";

const estates: any = {
    "63ecd3d709b8f04ccc7e27e6": "Квартиры",
    "63ecd3d709b8f04ccc7e27e9": "Авто напрокат",
    "63ecd3d709b8f04ccc7e27e8": "Бани и сауны",
    "63ecd3d709b8f04ccc7e27e7": "Коттеджы и усадьбы"
};
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

export const EstatesBreadcrumb: React.FC<any> = () => {
    const { search } = useLocation();
    const { typeId }: any = queryString.parse(search);

    if (typeId) {
        return <span>{estates[typeId]}</span>;
    }
    return <span>Аренда имущества</span>;
};

export const PostsBreadcrumb = ({ match }: any) => {
    const text: any = postTitlesById[match.params.postId];
    const cropperText = textCropper(text, 56);

    return <span>{cropperText}</span>;
};

export const UserBreadcrumb: React.FC<any> = ({ match }) => {
    const user = useStateSelector(getUserById(match.params.userId));

    if (user) {
        return <span>{`${user?.name}`}</span>;
    }
    return <span>Пользователь не найден</span>;
};

const Breadcrumbs: React.FC = () => {
    const breadcrumbs = useBreadcrumbs(routes);

    return (
        <div className="breadcrumbs">
            {breadcrumbs.map(({ match, breadcrumb }) => (
                <span className="breadcrumbs__item" key={match.pathname}>
                    {match.pathname === "/" ? (
                        <NavLink
                            className={"breadcrumbs__link"}
                            to={match.pathname}
                        >
                            <IconSvg
                                name="home-run"
                                width="15"
                                height="14"
                                svgClass="breadcrumbs__home-run"
                            />
                        </NavLink>
                    ) : (
                        <>
                            <IconSvg name="dot" svgClass="breadcrumbs__dot" />
                            <NavLink
                                className={"breadcrumbs__link"}
                                to={match.pathname}
                            >
                                {breadcrumb}
                            </NavLink>
                        </>
                    )}
                </span>
            ))}
        </div>
    );
};

export default React.memo(Breadcrumbs);