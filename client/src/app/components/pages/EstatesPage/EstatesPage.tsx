import queryString from "query-string";
import React, { useCallback, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { pageSizesList } from "../../../constants/appFilter";
import { USER_FILTER_KEY } from "../../../constants/sessionStorageConfig";
import { useFilters, usePaginate, useSearch, useSort } from "../../../hooks";
import { useAppDispatch, useStateSelector } from "../../../store";
import { getBookingList } from "../../../store/slices/booking";
import {
    getEstatesLoadingStatus,
    getFilteredEstates,
    loadFilteredEstatesList
} from "../../../store/slices/estates";
import Button from "../../common/Button";
import IconSvg from "../../common/IconSvg";
import Searchbar from "../../common/Searchbar";
import { SkeletonEstatesList } from "../../common/Skeletons/Estates";
import {
    EstateDirection,
    EstatesFilter,
    EstatesList,
    EstateSort,
    EstatesRecommended
} from "../../ui/Estates";

const EstatesPage: React.FC = () => {
    const [direction, setDirection] = useState<string>("tiles");
    const { search } = useLocation();
    const { typeId, cityId } = queryString.parse(search);
    const dispatch = useAppDispatch();
    const estates = useStateSelector(getFilteredEstates());
    const estatesLoading = useStateSelector(getEstatesLoadingStatus());
    const bookingList = useStateSelector(getBookingList());
    const { handleFilter, filteredItems } = useFilters(
        estates || [],
        bookingList || [],
        USER_FILTER_KEY
    );

    const { filteredData, searchTerm, setSearchTerm, handleChangeSearch } =
        useSearch(filteredItems || [], {
            searchBy: "title"
        });
    const { sortedItems, setSortBy } = useSort(filteredData || [], {
        path: "title",
        order: "desc"
    });
    const {
        itemsListCrop: estatesListCrop,
        page,
        limit,
        handlePageChange,
        handleLimitChange
    } = usePaginate(sortedItems || [], pageSizesList[1].value, 1);

    const handleSort = useCallback(
        ({ target }: React.ChangeEvent<HTMLInputElement>) => {
            setSortBy(JSON.parse(target.value));
            handlePageChange(1);
        },
        [handlePageChange, setSortBy]
    );

    const handleResetFilters = useCallback(() => {
        setSearchTerm("");
        setSortBy({ path: "title", order: "desc" });
        handleLimitChange({ target: pageSizesList[1] });
    }, []);

    useEffect(() => {
        dispatch(loadFilteredEstatesList({ typeId, cityId }));
    }, [search]);

    const setDirectionList = () => {
        setDirection("list");
    };
    const setDirectionTiels = () => {
        setDirection("tiles");
    };

    return (
        <>
            <EstatesRecommended />
            <EstatesFilter
                onFilter={handleFilter}
                onReset={handleResetFilters}
            />
            <div className="estates__container _container">
                <div className="estates-products">
                    <div className="estates-products__header">
                        <div className={"estates-products__select"}>
                            <IconSvg name="down-sort" />
                            <EstateSort onSort={handleSort} />
                        </div>
                        <div className="estates-products__search">
                            <Searchbar
                                label="Поиск по названию..."
                                value={searchTerm}
                                onChange={handleChangeSearch}
                            />
                        </div>
                        <div className="estates-products__view estates-view">
                            <EstateDirection
                                setDirectionList={setDirectionList}
                                setDirectionTiels={setDirectionTiels}
                            />
                        </div>
                    </div>
                </div>

                <div className={"estates-products__row " + direction}>
                    {!estatesLoading ? (
                        <EstatesList estates={estatesListCrop} />
                    ) : (
                        <SkeletonEstatesList />
                    )}
                </div>
            </div>
        </>
    );
};

export default EstatesPage;
