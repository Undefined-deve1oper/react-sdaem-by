import React from "react";
import SearchEstateForm from "../../ui/SearchEstateForm";

const HomePage = () => {
    return (
        <main className="page">
            <section className="page__main-search main-search">
                <div className="main-search__container _container">
                    <div className="main-search__body">
                        <div className="main-search__title">
                            Sdaem.by - у нас живут <span>ваши объявления</span>
                        </div>
                        <div className="main-search__search">
                            <SearchEstateForm />
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default HomePage;
