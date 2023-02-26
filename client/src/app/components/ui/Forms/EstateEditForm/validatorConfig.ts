export const validatorConfig = {
    price: {
        isRequired: {
            message: "Цена обязательна для заполнения"
        }
    },
    images: {
        isRequired: {
            message: "Картинки обязательны для заполнения"
        }
    },
    city: {
        isRequired: {
            message: "Город обязателен для заполнения"
        }
    },
    title: {
        isRequired: {
            message: "Название обязательно для заполнения"
        }
    },
    brandId: {
        isRequired: {
            message: "Бренд обязательно для заполнения"
        }
    },
    typeId: {
        isRequired: {
            message: "Тип обязателен для заполнения"
        }
    },
    info: {
        description: {
            isRequired: {
                message: "Детальная информация обязательно для заполнения"
            },
            min: {
                message: "Текс слишко короткий",
                value: 30
            }
        }
    }
};
