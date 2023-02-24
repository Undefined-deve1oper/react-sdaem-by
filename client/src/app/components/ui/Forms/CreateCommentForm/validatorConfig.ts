export const validatorConfig = {
    comment: {
        isRequired: {
            message: "Нельзя отправить пустой отзыв"
        },
        min: {
            message: "Отзыв слишком короткий",
            value: 30
        }
    },
    rating: {
        isRequired: {
            message: "Оцените от 1 до 5"
        }
    }
};
