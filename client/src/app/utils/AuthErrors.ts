const generateAuthError = (message: string) => {
    switch (message) {
        case "USER_DISABLED":
            return "Учетная запись пользователя отключена администратором.";
        case "EMAIL_EXISTS":
            return "Пользователь с таким Email уже существует";
        case "EMAIL_NOT_FOUND":
        case "INVALID_PASSWORD":
        case "INVALID_EMAIL":
            return "Неверный Email или пароль";
        default:
            return "Слишком много попыток входа, попробуйте позже";
    }
};

export default generateAuthError;
