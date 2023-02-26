import React, { useState } from "react";
import { Tab, TabList, TabPanel, Tabs as ReactTabs } from "react-tabs";

interface ITab {
    _id: number;
    name: string;
    component: React.ReactNode | React.ReactNode[];
}

interface ITabs {
    options: ITab[];
}

const Tabs: React.FC<ITabs> = ({ options, ...rest }) => {
    const [value, setValue] = useState(0);

    const handleChange = (page: number) => {
        setValue(page);
    };

    return (
        <ReactTabs selectedIndex={value} onSelect={handleChange}>
            <div className="tabs-header">
                <TabList className="tab-list">
                    {options.map((tab) => (
                        <Tab
                            key={tab.name}
                            className={`tab-list__item second ${
                                tab._id === value ? "selected" : ""
                            }`}
                        >
                            {tab.name}
                        </Tab>
                    ))}
                </TabList>
            </div>
            {options.map((option, index) => (
                <div
                    key={option.name}
                    role="tabpanel"
                    hidden={value !== index}
                    {...rest}
                >
                    <TabPanel key={option.name} className={"tab-list__panel"}>
                        {option.component}
                    </TabPanel>
                </div>
            ))}
        </ReactTabs>
    );
};

export default Tabs;
