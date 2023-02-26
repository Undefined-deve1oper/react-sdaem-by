import queryString from "query-string";
import React from "react";
import { NavLink, useLocation, useParams } from "react-router-dom";
import useBreadcrumbs from "use-react-router-breadcrumbs";
import routes from "../../../router";
import { getUserById, useStateSelector } from "../../../store";
import { textCropper } from "../../../utils/helpers";
import IconSvg from "../IconSvg";

const estates: any = {
    "63fa1ed26ac7a5d3db84a26d": "Квартиры",
    "63fa1ed26ac7a5d3db84a270": "Авто напрокат",
    "63fa1ed26ac7a5d3db84a26f": "Бани и сауны",
    "63fa1ed26ac7a5d3db84a26e": "Коттеджы и усадьбы"
};
const postTitlesById: any = {
    "63fa1ed06ac7a5d3db84a246": "Аренда квартиры посуточно",
    "63fa1ed06ac7a5d3db84a245":
        "Линия Сталина: суровый отдых в усадьбах на сутки",
    "63fa1ed06ac7a5d3db84a247": "Дворцово-парковый комплекс Чапских",
    "63fa1ed06ac7a5d3db84a24a": `"Плюсы" аренды квартир на сутки`,
    "63fa1ed06ac7a5d3db84a24c": "Зачем арендовать авто?",
    "63fa1ed06ac7a5d3db84a24b":
        "Преимущества квартир на сутки перед гостиницей",
    "63fa1ed06ac7a5d3db84a24d": "Прокат машин",
    "63fa1ed06ac7a5d3db84a24e": "Как найти комфортное жильё в командировке?",
    "63fa1ed06ac7a5d3db84a24f": "Где же остановиться?",
    "63fa1ed06ac7a5d3db84a251": "Аренда усадьбы",
    "63fa1ed06ac7a5d3db84a250": "Квартира посуточно: нюансы выбора",
    "63fa1ed06ac7a5d3db84a252":
        "Агроусадьба для инвалидов с безбарьерной средой",
    "63fa1ed06ac7a5d3db84a253": "Усадьба в аренду",
    "63fa1ed06ac7a5d3db84a254":
        "Квартиры посуточно – это самый удобный и недорогой способ для размещения командировочных и туристов.",
    "63fa1ed06ac7a5d3db84a256": "Деловая поездка в незнакомый город",
    "63fa1ed06ac7a5d3db84a255":
        "Альтернатива хостелу, более дорогая, но и более комфортная – квартиры посуточно",
    "63fa1ed06ac7a5d3db84a257":
        "Аренда сауны на сутки – это прекрасный вид досуга",
    "63fa1ed06ac7a5d3db84a248": "Советы по аренде квартир на сутки",
    "63fa1ed06ac7a5d3db84a249":
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
    const cropperText = textCropper(text || "", 56);

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
