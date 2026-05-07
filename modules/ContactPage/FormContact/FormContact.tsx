"use client"

import { useTranslations } from "next-intl"
import { BiSend } from "react-icons/bi"
import { formSchema } from "./FormContact.form"
import emailjs from "@emailjs/browser"
import { Field, Form, Formik } from "formik"

interface FormContact {
    user_email: string
    user_name: string
    message: string
}

const initialValues: FormContact = {
    user_name: "",
    user_email: "",
    message: ""
}

export const FormContact = () => {

    const t = useTranslations()

    const sendEmail = async (
        values: FormContact
    ) => {
        const { message, user_email, user_name } = values
        try {
            await emailjs.send(
                process.env.NEXT_PUBLIC_EMAIL_SERVICE_ID!,
                process.env.NEXT_PUBLIC_EMAIL_TEMPLATE_ID!,
                {
                    user_name,
                    user_email,
                    message,
                },
                process.env.NEXT_PUBLIC_EMAIL_PUBLIC_KEY_ID!
            )
        } catch (error) {
            console.log("EMAILJS FAILED...", error)
        }
    }

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={formSchema}
            onSubmit={sendEmail}
        >
            {({
                values,
                errors,
                touched,
                handleChange,
                isSubmitting,
            }) => (
                <Form className="flex flex-col gap-4 max-w-96 text-center">

                    <h2 className="text-xl font-medium">
                        {t("contact.subtitle")}
                    </h2>
                    <div className="w-full text-left">
                        <Field
                            type="text"
                            name="user_name"
                            onChange={handleChange}
                            placeholder={t("contact.inputName")}
                            autoComplete="off"
                            className={`p-2 bg-white w-full text-black font-medium text-md rounded-sm outline-none border-2 ${touched.user_name && errors.user_name && 'border-red-500'}`}
                        />

                        {touched.user_name && errors.user_name && (
                            <p className="text-red-500 text-xs font-bold">
                                {t(`${errors.user_name}`)}
                            </p>
                        )}
                    </div>
                    <div className="w-full text-left">
                        <Field
                            type="email"
                            name="user_email"
                            placeholder={t("contact.inputEmail")}
                            onChange={handleChange}
                            autoComplete="off"
                            className="p-2 bg-white w-full text-black font-medium text-md rounded-sm outline-none border"
                        />

                        {touched.user_email && errors.user_email && (
                            <p className="text-red-500 text-xs font-bold">
                                {t(errors.user_email)}
                            </p>
                        )}
                    </div>
                    <div className="w-full text-left">
                        <Field
                            as="textarea"
                            name="message"
                            value={values.message}
                            onChange={handleChange}
                            placeholder={t("contact.inputText")}
                            className="p-2 min-h-32 w-full bg-white text-black font-light text-md rounded-sm outline-none border resize-none"
                        />

                        {touched.message && errors.message && (
                            <p className="text-red-500 text-xs font-bold">
                                {t(errors.message)}
                            </p>
                        )}
                    </div>
                    <div className="relative mt-8">
                        <div className="w-32 h-14 absolute left-4 -top-1 border-2 border-secondary rounded-xs inset-0" />
                        <button type="submit"
                            disabled={isSubmitting}
                            aria-label="send message"
                            className="relative w-34 h-12 rounded-xs bg-secondary font-bold flex items-center justify-center gap-2 cursor-pointer shadow-2xl active:scale-95 duration-300 text-md group"
                        >
                            {t('common.contact')} <BiSend size={20} className="group-hover:translate-x-2 duration-300" />
                        </button>
                    </div>

                </Form>
            )}
        </Formik>
    )
}