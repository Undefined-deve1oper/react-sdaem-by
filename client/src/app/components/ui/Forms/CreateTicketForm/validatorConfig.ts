export const validatorConfig = {
    email: {
        isRequired: {
            message: "Email обязателен для заполнения"
        },
        isEmail: {
            message: "Email введен некоректно"
        }
    },
    name: {
        isRequired: {
            message: "Имя не может быть пустым"
        }
    },
    description: {
        isRequired: {
            message: "Сообщение обязательно для заполнения"
        }
    }
};
