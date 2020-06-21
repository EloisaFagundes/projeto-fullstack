
export const loginForm = [
    {
        name: "name",
        label: "Nome",
        type: "text",
        required: true,
        pattern: "[A-Za-zÀ-ú ]{3,}",
        title: "O campo Nome do Usuário deve ter no mínimo 3 letras.",
    },
    {
        name: "nickname",
        label: "Apelido",
        type: "text",
        required: true,
        pattern: "[A-Za-zÀ-ú ]{3,}",
        title: "O campo Nome do Usuário deve ter no mínimo 3 letras.",
    },
    {
        name: "email",
        label: "E-mail",
        type: "email",
        required: true,
    },
    {
        name: "password",
        label: "Senha",
        type: "password",
        required: true,
        pattern: "[A-Za-z0-9]{6,}",
        title: "O campo Senha deve ter no mínimo 5 letras ou números, sem espaço.",
    },
    {
        name: "description",
        label: "Descrição",
        type: "text",
        role:"BAND"
    },
]
