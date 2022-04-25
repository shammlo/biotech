import React, { useState, useEffect } from 'react';
import './login.css';
import logo from '../../images/logo.png';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import i18next from 'i18next';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Cookies from 'js-cookie';
function Login() {
    const { t } = useTranslation();

    const [username, setusername] = useState('');
    const [password, setpassword] = useState('');
    const [errors, seterrors] = useState(t('Login'));
    const [LoginStatus, setLoginStatus] = useState(false);
    const navigate = useNavigate();

    // console.log(i18next.language)
    const login = async () => {
        try {
            const { data } = await axios.post(`${process.env.REACT_APP_MAIN_URL}users/login`, {
                email: username,
                password: password,
            });
            // console.log(data)
            if (!data.token) {
                setLoginStatus(false);
                alert('wrong');
            } else {
                localStorage.setItem('token', JSON.stringify(data));
                Cookies.set('biotechToken', data.token, { expires: 2 });
                setLoginStatus(true);
                navigate('/');
            }
        } catch (error) {
            // console.log(error.response.data[0].meesageKR);
            toast.error(
                i18next.language === 'ku'
                    ? error.response.data[0].meesageKR
                    : error.response.data[0].messageAR,
                {
                    position: 'top-right',
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                }
            );
            i18next.language === 'ku'
                ? seterrors(error.response.data[0].messageKR)
                : seterrors(error.response.data[0].messageAR);
        }
    };
    const logout = () => {
        localStorage.removeItem('token');
        // toast.error(
        //     i18next.language === 'ku'
        //         ? error.response.data[0].meesageKR
        //         : error.response.data[0].messageAr,
        //     {
        //         position: 'top-right',
        //         autoClose: 2000,
        //         hideProgressBar: false,
        //         closeOnClick: true,
        //         pauseOnHover: true,
        //         draggable: true,
        //     }
        // );
        window.location.reload();
    };

    useEffect(() => {
        if (localStorage.getItem('token') !== null || undefined || 0) {
            setLoginStatus(true);
        }
    }, []);

    return (
        <>
            <div className="login-container">
                <div className="login-logo ">
                    <img src={logo} alt="header" />
                </div>
                <div className="login-input" dir="rtl">
                    <div className="login ">
                        <form>
                            {LoginStatus ? (
                                <div className="form">
                                    {' '}
                                    <h2>{t('logedin')}</h2>
                                    {/* <input onClick={() => navigate("/")} defaultValue={t("backhome")} className="submit" /> */}
                                    <button onClick={logout} className="submit bd">
                                        {t('logout')}
                                    </button>
                                    {/* <input onClick={() => navigate("/")} defaultValue={t("backhome")} className="submit" /> */}
                                </div>
                            ) : (
                                <div className="form">
                                    <h2>{errors}</h2>
                                    <input
                                        type="text"
                                        onChange={(e) => setusername(e.target.value)}
                                        placeholder={t('user')}
                                    />
                                    <input
                                        type="password"
                                        onChange={(e) => setpassword(e.target.value)}
                                        placeholder={t('password')}
                                    />
                                    <button
                                        type="button"
                                        onClick={login}
                                        // defaultValue={t('LoginB')}
                                        className="submit"
                                    >
                                        {t('LoginB')}
                                    </button>
                                </div>
                            )}
                        </form>
                    </div>
                </div>
            </div>
            <ToastContainer rtl={true} />
        </>
    );
}

export default Login;
