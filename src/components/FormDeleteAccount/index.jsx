import { useEffect, useState, useRef } from "react";

import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import clsx from "clsx";
import { useFormik } from "formik";
import * as Yup from "yup";

const bag2 =
    "https://cdn.vn.alongwalk.info/wp-content/uploads/2023/01/05212422/image-30-hinh-nen-meo-cute-dung-cho-ca-dien-thoai-va-may-tinh-bfa19be160372b49145eb85b3f12be80.jpg";

function FormDeleteAccount({ children }) {
    const refContact = useRef(null);
    const [loading, setLoading] = useState(false);
    const [required, setRequired] = useState(false);
    const showSuccessNoti = () => toast.success("Chúng tôi sẽ xem xét yêu cầu của bạn và xử lý trong vòng 30 ngày!");
    const showErorrNoti = () => toast.error("Có lỗi xảy ra!");
    const navigate = useNavigate();

    const validationSchema = Yup.object({
        name: Yup.string().required("Vui lòng nhập tên của bạn!"),

        phone: Yup.string()
            .required("Vui lòng nhập số điện thoại!")
            .matches(
                /^(\+?\d{0,4})?\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{4}\)?)?$/,
                "Số điện thoại chưa đúng!"
            ),
        password: Yup.string()
            .required("Vui lòng nhập nhập mật khẩu!")
            .min(6, "Mật khẩu quá ngắn! mật khẩu phải có ít nhất 6 kí tự"),
        confirmPassword: Yup.string()
            .required("Vui lòng nhập nhập lại mật khẩu!")
            .oneOf([Yup.ref("password"), null], "Nhập lại mật khẩu không đúng"),
    });

    const form = useFormik({
        initialValues: {
            name: "",
            phone: "",
            password: "",
            confirmPassword: "",
        },
        validationSchema,
        onSubmit: handleFormsubmit,
    });
    //
    function handleFormsubmit(values) {
        setLoading(true);
        setRequired(true);
        showSuccessNoti();
        console.log(values);
        setLoading(false);
        form.resetForm();
    }
    console.log(required);
    //
    return (
        <div className="flex flex-col h-[100%] select-none justify-center mt-6 mb-24  gap-12 items-center bg-okuro-background-contact">
            <div className=" text-center text-[40px] font-semibold font-roboto capitalize text-okuro-color-text ">
                Xóa tài khoản
            </div>
            <form onSubmit={form.handleSubmit} className="flex flex-col gap-5 h-full w-[500px]">
                <div className="flex flex-col gap-3 h-full w-full">
                    <div
                        className={clsx('"flex flex-col h-[85px] w-full   sm:text-sm', {
                            invalid: required && form.errors.name,
                        })}
                    >
                        <input
                            type="text"
                            name="name"
                            id="name"
                            className={clsx(
                                "h-[65px] w-full rounded-lg border border-gray-300 py-[20px] px-[24px] text-gray-900    sm:text-sm",
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
                                className={clsx("text-sm text-red-500 w-full ", {
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
                        className={clsx('"flex flex-col h-[85px] w-full   sm:text-sm', {
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
                                className={clsx("text-sm text-red-500 w-full ", {
                                    "opacity-100": form.touched.phone && form.errors.phone,
                                })}
                            >
                                {form.errors.phone || "No message"}
                            </span>
                        ) : (
                            <></>
                        )}
                    </div>
                    <div
                        className={clsx('"flex flex-col h-[85px] w-full   sm:text-sm', {
                            invalid: required && form.errors.password,
                        })}
                    >
                        <input
                            type="password"
                            name="password"
                            id="password"
                            className={clsx(
                                "h-[65px] w-full rounded-lg border border-gray-300  py-[20px] px-[24px] text-gray-900    sm:text-sm",
                                {
                                    invalid: form.touched.password && form.errors.password,
                                }
                            )}
                            onChange={form.handleChange}
                            onBlur={form.handleBlur}
                            value={form.values.password}
                            placeholder="Vui lòng nhập mật khẩu"
                        />
                        {required && form.errors.password ? (
                            <span
                                className={clsx("text-sm text-red-500 w-full ", {
                                    "opacity-100": form.touched.password && form.errors.password,
                                })}
                            >
                                {form.errors.password || "No message"}
                            </span>
                        ) : (
                            <></>
                        )}
                    </div>
                    <div
                        className={clsx('"flex flex-col h-[85px] w-full   sm:text-sm', {
                            invalid: required && form.errors.confirmPassword,
                        })}
                    >
                        <input
                            type="password"
                            name="confirmPassword"
                            id="confirmPassword"
                            className={clsx(
                                "h-[65px] w-full rounded-lg border border-gray-300  py-[20px] px-[24px] text-gray-900    sm:text-sm",
                                {
                                    invalid: form.touched.confirmPassword && form.errors.confirmPassword,
                                }
                            )}
                            onChange={form.handleChange}
                            onBlur={form.handleBlur}
                            value={form.values.confirmPassword}
                            placeholder="Vui lòng nhập lại mật khẩu"
                        />
                        {required && form.errors.confirmPassword ? (
                            <span
                                className={clsx("text-sm text-red-500 w-full ", {
                                    "opacity-100": form.touched.confirmPassword && form.errors.confirmPassword,
                                })}
                            >
                                {form.errors.confirmPassword || "No message"}
                            </span>
                        ) : (
                            <></>
                        )}
                    </div>
                </div>
                <div className="flex flex-col ">
                    <button
                        type="submit"
                        className="btn btn-red btn-md w-full"
                        onClick={() => {
                            setRequired(true);
                        }}
                    >
                        {!loading ? (
                            <span>Xóa tài khoản</span>
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
                    <div className="flex items-center mt-2">
                        <img src="../../../info.png" alt="" />
                        <span className="text-base font-normal font-roboto text-okuro-body-color">
                            Vui lòng kiểm tra lại một lần nữa các thông tin để tránh sai sót
                        </span>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default FormDeleteAccount;
