import * as Yup from "yup"

export const formSchema = Yup.object({
    user_name: Yup.string()
        .required("contact.formErrorMessages.name"),

    user_email: Yup.string()
        .email("contact.formErrorMessages.email"),

    message: Yup.string()
        .required("contact.formErrorMessages.message")
})