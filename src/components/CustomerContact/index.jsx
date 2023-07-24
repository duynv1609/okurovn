import { useEffect, useState, useRef } from "react";

import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import clsx from "clsx";
import { useFormik } from "formik";
import * as Yup from "yup";

const bag2 =
    "https://cdn.vn.alongwalk.info/wp-content/uploads/2023/01/05212422/image-30-hinh-nen-meo-cute-dung-cho-ca-dien-thoai-va-may-tinh-bfa19be160372b49145eb85b3f12be80.jpg";

function Contact({ children }) {
    const refContact = useRef(null);
    const [loading, setLoading] = useState(false);
    const [required, setRequired] = useState(false);
    const showSuccessNoti = () => toast.success("Thêm thành công!");
    const showErorrNoti = () => toast.error("Có lỗi xảy ra!");
    const navigate = useNavigate();

    const validationSchema = Yup.object({
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
        setRequired(true);
        console.log(values);
        setLoading(false);
    }
    //
    return (
        <div className="flex flex-col w-full  select-none justify-start py-12  gap-12 items-center bg-okuro-background-contact ">
            <div className=" text-center text-[40px] font-semibold font-roboto capitalize text-okuro-color-text mobile:hidden">
                Liên hệ
            </div>
            <form onSubmit={form.handleSubmit} className="w-auto">
                <div className="flex flex-col">
                    <div className="flex gap-y-3 mobile:flex-col">
                        <div className="flex flex-col gap-3 px-6 h-full w-[400px] mobile:w-full ">
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
                                    placeholder="Họ và tên"
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
                                    placeholder="Email"
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
                                    placeholder="Số điện thoại"
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
                        <div className="flex flex-col gap-3 px-6 h-auto w-[400px] mobile:w-full">
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
                                placeholder="Nội dung"
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
                        className="btn btn-blue btn-md  "
                        onClick={() => {
                            setRequired(true);
                        }}
                    >
                        {!loading ? (
                            <span>Gửi thông tin</span>
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
                    <div className="flex items-center">
                        <img src="../../../info.png" alt="" />
                        <span className="text-base font-normal font-roboto text-okuro-body-color mobile:text-[16px] mobile:leading-normal">
                            Kiểm tra hộp thư thường xuyên để theo dõi và cập nhật thông tin giá trị nhanh nhất
                        </span>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default Contact;
