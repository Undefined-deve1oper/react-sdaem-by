export const validatorConfig = {
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
        }
    }
};
