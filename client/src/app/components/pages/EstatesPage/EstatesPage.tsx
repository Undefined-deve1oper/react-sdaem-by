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
import Pagination from "../../common/Pagination";
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
    const { sortedItems, sortBy, setSortBy } = useSort(filteredData || [], {
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
            setSortBy(JSON.parse(target.value || "{}"));
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
                        <div
                            className={
                                "estates-products__select product-header__items"
                            }
                        >
                            <EstateSort
                                sortBy={sortBy}
                                onSort={handleSort}
                                limit={limit}
                                handleLimitChange={handleLimitChange}
                            />
                        </div>
                        <div className="estates-products__search product-header__items">
                            <Searchbar
                                label="Поиск по названию..."
                                value={searchTerm}
                                onChange={handleChangeSearch}
                            />
                        </div>
                        <div className="estates-products__view estates-view product-header__items">
                            <EstateDirection
                                setDirectionList={setDirectionList}
                                setDirectionTiels={setDirectionTiels}
                            />
                        </div>
                    </div>
                </div>

                {!estatesLoading ? (
                    <div className={"estates-products__row " + direction}>
                        <EstatesList estates={estatesListCrop} />
                    </div>
                ) : (
                    <SkeletonEstatesList />
                )}

                {sortedItems.length > limit && (
                    <div className="estates-products__pagination">
                        <Pagination
                            itemsCount={sortedItems.length}
                            pageSize={limit}
                            currentPage={page}
                            onPageChange={handlePageChange}
                        />
                        <p className="estates-products__pagination-info">
                            {`${(page - 1) * limit || 1} -  ${
                                limit * page > estates.length
                                    ? estates.length
                                    : limit * page
                            } из ${estates.length} вариантов аренды`}
                        </p>
                    </div>
                )}
            </div>
        </>
    );
};

export default EstatesPage;
