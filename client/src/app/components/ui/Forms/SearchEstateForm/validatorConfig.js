export const validatorConfig = {
    city: {
        isRequired: {
            message: "Город обязателен для заполнения"
        }
    },
    room: {
        isRequired: {
            message: "Количество комнат обязательно для заполнения"
        }
    },
    priceMin: {
        isRequired: {
            message: "Минимальная цена обязательна для заполнения"
        }
    },
    priceMax: {
        isRequired: {
            message: "Максимальная цена обязательно для заполнения"
        }
    }
};
