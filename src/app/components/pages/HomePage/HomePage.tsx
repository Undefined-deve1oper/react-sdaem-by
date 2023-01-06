import React from "react";
import BackgroundParallax from "../../common/BackgroundParallax/BackgroundParallax";
import SearchEstateForm from "../../ui/SearchEstateForm";

const HomePage: React.FC = () => {
    return (
        <main className="page">
            <section className="page__main-search main-search">
                <div className="main-search__container _container">
                    <BackgroundParallax
                        className="main-search__parallax"
                        itemsClassName="main-search__background"
                    />
                    <div className="main-search__body">
                        <div className="main-search__title">
                            Sdaem.by - у нас живут <span>ваши объявления</span>
                        </div>
                        <SearchEstateForm />
                    </div>
                </div>
            </section>
        </main>
    );
};

export default HomePage;
