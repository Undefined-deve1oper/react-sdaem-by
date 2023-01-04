import React from "react";
import {
    MouseParallaxChild,
    MouseParallaxContainer
} from "react-parallax-mouse";
import SearchEstateForm from "../../ui/SearchEstateForm";

const HomePage: React.FC = () => {
    return (
        <main className="page">
            <section className="page__main-search main-search">
                <MouseParallaxContainer
                    className="main-search__container _container"
                    globalFactorX={ 0.3 }
                    globalFactorY={ 0.3 }
                    resetOnLeave
                >
                    <div className="main-search__body">
                        <div className="main-search__title">
                            Sdaem.by - у нас живут <span>ваши объявления</span>
                        </div>
                        <div className="main-search__search">
                            <SearchEstateForm/>
                        </div>
                    </div>
                    <MouseParallaxChild
                        factorX={0.2}
                        factorY={0.2}
                        className={"main-search__background parallax__item"}
                    />
                </MouseParallaxContainer>
            </section>
        </main>
    );
};

export default HomePage;
