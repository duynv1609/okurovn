import { useEffect, useState, useRef } from "react";
import { useMediaQuery } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import clsx from "clsx";
import { useContext } from "react";
import { LangContext } from "../../LangContext";

import { useFormik } from "formik";
import * as Yup from "yup";
import { useTranslation } from "react-i18next";

function Contact({ children, Hid }) {
    const { t } = useTranslation();
    const isDeskTop = useMediaQuery("(min-width:1000px)");
    const [loading, setLoading] = useState(false);
    const [required, setRequired] = useState(false);
    const showSuccessNoti = () => toast.success("Thêm thành công!");
    const showErorrNoti = () => toast.error("Có lỗi xảy ra!");

    const validationSchema = Yup.object({
        name: Yup.string().required("Vui lòng nhập họ và tên!"),
        email: Yup.string()
            .required("Vui lòng nhập địa chỉ email!")
            .matches(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i, "Email của bạn không đúng định dạng"),
        phone: Yup.string()
            .required("Vui lòng nhập số điện thoại!")
            .matches(
                /^(\+?\d{0,4})?\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{4}\)?)?$/,
                "Số điện thoại chưa đúng!"
            ),
        content: Yup.string().required("Vui lòng nhập nội dung"),
    });

    const form = useFormik({
        initialValues: {
            name: "",
            email: "",
            phone: "",
            content: "",
        },
        validationSchema,
        onSubmit: handleFormsubmit,
    });
    //
    function handleFormsubmit(values) {
        setLoading(true);
        fetch("https://be-okurovn.vercel.app/api/customer", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(values),
        })
            .then((res) => res.json())
            .then((resJson) => {
                if (resJson.success) {
                    setLoading(false);
                    showSuccessNoti();
                    form.resetForm();
                } else {
                    setLoading(false);
                    showErorrNoti();
                }
            })
            .catch(() => {
                setLoading(false);
                showErorrNoti();
            });
    }
    //
    return (
        <div className="flex flex-col w-full  select-none justify-start py-12  gap-12 items-center bg-okuro-background-contact ">
            {(isDeskTop || !Hid) && (
                <div className=" text-center text-[40px] font-semibold font-roboto capitalize text-okuro-color-text">
                    {t("content.Liên hệ")}
                </div>
            )}
            <form onSubmit={form.handleSubmit} className="w-full max-w-[1200px]">
                <div className="flex flex-col">
                    <div className="flex gap-y-3 mobile:flex-col">
                        <div className="flex flex-col gap-3 px-6 h-full w-full ">
                            <div
                                className={clsx('"flex flex-col h-[65 px] w-full   sm:text-sm', {
                                    invalid: required && form.errors.name,
                                })}
                            >
                                <input
                                    type="text"
                                    name="name"
                                    id="name"
                                    className={clsx(
                                        "h-[65px] w-full rounded-lg border border-gray-300  py-[20px] px-[24px] text-gray-900    sm:text-sm",
                                        {
                                            invalid: form.touched.name && form.errors.name,
                                        }
                                    )}
                                    onChange={form.handleChange}
                                    onBlur={form.handleBlur}
                                    value={form.values.name}
                                    placeholder={t("content.Họ và tên")}
                                />
                                {required && form.errors.name ? (
                                    <span
                                        className={clsx("text-sm text-red-500 ", {
                                            "opacity-100": form.touched.name && form.errors.name,
                                        })}
                                    >
                                        {form.errors.name || "No message"}
                                    </span>
                                ) : (
                                    <></>
                                )}
                            </div>
                            <div
                                className={clsx('"flex flex-col h-[65 px] w-full   sm:text-sm', {
                                    invalid: required && form.errors.email,
                                })}
                            >
                                <input
                                    type="text"
                                    name="email"
                                    id="email"
                                    className={clsx(
                                        "h-[65px] w-full rounded-lg border border-gray-300  py-[20px] px-[24px] text-gray-900    sm:text-sm",
                                        {
                                            invalid: form.touched.email && form.errors.email,
                                        }
                                    )}
                                    onChange={form.handleChange}
                                    onBlur={form.handleBlur}
                                    value={form.values.email}
                                    placeholder={t("content.Email")}
                                />
                                {required && form.errors.email ? (
                                    <span
                                        className={clsx("text-sm text-red-500 ", {
                                            "opacity-100": form.touched.email && form.errors.email,
                                        })}
                                    >
                                        {form.errors.email || "No message"}
                                    </span>
                                ) : (
                                    <></>
                                )}
                            </div>
                            <div
                                className={clsx('"flex flex-col h-[65 px] w-full   sm:text-sm', {
                                    invalid: required && form.errors.name,
                                })}
                            >
                                <input
                                    type="text"
                                    name="phone"
                                    id="phone"
                                    className={clsx(
                                        "h-[65px] w-full rounded-lg border border-gray-300  py-[20px] px-[24px] text-gray-900    sm:text-sm",
                                        {
                                            invalid: form.touched.phone && form.errors.phone,
                                        }
                                    )}
                                    onChange={form.handleChange}
                                    onBlur={form.handleBlur}
                                    value={form.values.phone}
                                    placeholder={t("content.Số điện thoại")}
                                />
                                {required && form.errors.phone ? (
                                    <span
                                        className={clsx("text-sm text-red-500 ", {
                                            "opacity-100": form.touched.phone && form.errors.phone,
                                        })}
                                    >
                                        {form.errors.phone || "No message"}
                                    </span>
                                ) : (
                                    <></>
                                )}
                            </div>
                        </div>
                        <div className="flex flex-col gap-3 px-6 h-auto w-full mobile:w-full">
                            <textarea
                                type="text"
                                name="content"
                                id="content"
                                className={clsx(
                                    " w-full h-full rounded-lg border border-gray-300  p-2.5 text-gray-900    sm:text-sm",
                                    {
                                        invalid: form.touched.content && form.errors.content,
                                    }
                                )}
                                onChange={form.handleChange}
                                onBlur={form.handleBlur}
                                value={form.values.content}
                                placeholder={t("content.Nội dung")}
                            ></textarea>
                            {required && form.errors.content ? (
                                <span
                                    className={clsx("text-sm text-red-500 ", {
                                        "opacity-100": form.touched.content && form.errors.content,
                                    })}
                                >
                                    {form.errors.content || "No message"}
                                </span>
                            ) : (
                                <></>
                            )}
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-6 pt-12 px-6">
                    <button
                        type="submit"
                        className="btn btn-blue bg-blue-gray-50 btn-md  "
                        onClick={() => {
                            setRequired(true);
                        }}
                    >
                        {!loading ? (
                            <span>{t("content.Gửi thông tin")}</span>
                        ) : (
                            <div className="flex items-center">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    className="h-4 w-4 animate-spin"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z"
                                    />
                                </svg>
                            </div>
                        )}
                    </button>
                    <div className="flex items-start gap-[9px]">
                        <img src="../../../info.png" alt="" />
                        <span className="text-base font-normal font-roboto text-okuro-body-color mobile:text-[16px] mobile:leading-normal">
                            {t(
                                "content.Kiểm tra hộp thư thường xuyên để theo dõi và cập nhật thông tin giá trị nhanh nhất"
                            )}
                        </span>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default Contact;
