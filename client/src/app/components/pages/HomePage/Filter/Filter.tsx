import React, { useState } from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import tabsList from "../../../../config/tabs-config.json";
import { SearchEstateForm } from "../../../ui/Forms";

const Filter: React.FC = () => {
    const [tabIndex, setTabIndex] = useState(0);
    const { panels, tabs } = tabsList;

    const handleTabIndex = (inedx: number) => {
        setTabIndex(inedx);
    };

    return (
        <>
            <section className="page__main-search main-search">
                <div className="main-search__container _container">
                    <div className="main-search__body">
                        <div className="main-search__title">
                            Sdaem.by - у нас живут <span>ваши объявления</span>
                        </div>
                        <Tabs
                            selectedIndex={tabIndex}
                            onSelect={handleTabIndex}
                        >
                            <TabList className="tab-list">
                                {tabs.map((tab) => (
                                    <Tab
                                        key={tab.id}
                                        className={`tab-list__item ${
                                            tab.id === tabIndex
                                                ? "selected"
                                                : ""
                                        }`}
                                    >
                                        {tab.label}
                                    </Tab>
                                ))}
                            </TabList>
                            {panels.map((panel) => (
                                <TabPanel key={panel.id}>
                                    {/* <SearchEstateForm /> */}
                                </TabPanel>
                            ))}
                        </Tabs>
                    </div>
                </div>
            </section>
            {/* <section className="page__main-products main-products">
                <div className="main-products__container _container">
                    <ProductsList />
                    <ProductsNavs />
                </div>
            </section> */}
        </>
    );
};

export default Filter;
