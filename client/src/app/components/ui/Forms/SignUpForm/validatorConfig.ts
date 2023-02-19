export const validatorConfig = {
    name: {
        isRequired: {
            message: "Имя обязательно для заполнения"
        }
    },
    email: {
        isRequired: {
            message: `Email обязателен для заполнения`
        },
        isEmail: {
            message: `Email введен некоректно`
        }
    },
    password: {
        isRequired: {
            message: `Пароль обязателен для заполнения`
        },
        isContainDigit: {
            message: "Поле пароль должно иметь как минимум одно число"
        },
        isCapitalSymbol: {
            message: "Поле пароль должно иметь как минимум одну заглавную букву"
        },
        min: {
            message: "Поле пароль должно содержать минимум 6 символов",
            value: 6
        }
    },
    birthYear: {
        isRequired: {
            message: `Поле "Дата Рождения" обязательно для заполнения`
        },
        isCorrectDate: {
            message: `Поле "Дата Рождения" некоректно`
        },
        isAdult: {
            message: `Наш сервис предназначен для лиц старше 18 лет`,
            params: 18
        }
    }
};
