import styled from 'styled-components';

export const Navbar = styled.div`
    /* background-color: ${({ bg }) => bg}; */
    /* position: absolute; */
    height: 10vh;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 3;
    margin-bottom: -65px;

    @media screen and (max-width: 768px) {
        margin-bottom: 0;
    }
    .ax {
        /* display: none; */
        font-size: 0.0001px;
    }

    .nav_container {
        /* margin-bottom: -70px !important; */
        max-width: 1920px;
        /* margin: auto; */
        margin-bottom: -70px !important;

        ul {
            list-style-type: none;
            margin-left: 10px;
            padding: 20px;
            overflow: hidden;
            display: flex;
            justify-content: center;
            align-items: center;

            li {
                /* float: left; */

                a {
                    display: block;
                    color: ${({ fg }) => fg};
                    text-align: center;
                    font-size: 20px;
                    padding: 8px 15px;
                    padding: 14px 36px;

                    text-decoration: none;
                    text-align: center;

                    &:hover {
                        transition: all 0.2s ease-in;

                        color: #ff9300;
                    }

                    &.active {
                        color: #ff9300;
                    }
                }
            }
        }

        .search-bar {
            display: flex;
            align-items: center;
            width: 300px;
            padding-right: 20px;
            padding-left: 20px;
            padding-bottom: 5px;
            position: relative;
            .clear-search {
                padding: 10px;
                display: flex;
                align-items: center;
                position: absolute;
                left: 20px;
                svg {
                    fill: #505050;
                }
                &:hover svg {
                    transition: all 0.2s ease-in;
                    color: #ff9300;
                    cursor: pointer;
                    fill: #ff9300;
                }
            }

            input {
                width: 100%;
                height: 40px;
                border: 1px solid #ff9300;
                border-radius: 6px;
                padding: 5px;
                display: flex;
                align-items: center;
                font-size: 15px;

                @media screen and (max-width: 768px) {
                    border: 1px solid #ff9300;
                }
                &:focus {
                    outline: none;
                    outline: 2px solid #ff9300;
                }
            }
        }
    }
    .nav-logo {
        width: 10%;
        display: flex;
        align-items: center;
        justify-content: center;

        a {
            max-height: 72px;
        }
    }
    .nav-logo img {
        width: 100%;
    }

    .nav-utils {
        width: 30%;
        display: flex;
        justify-content: space-evenly;
        align-items: center;
    }
    .cart-logo {
        // margin: auto;
        zoom: 140%;
        cursor: pointer;
        padding: 8px 15px;
        display: flex;
        align-items: center;
        &:hover {
            svg path {
                transition: all 0.2s ease-in;
                stroke: #ff9300;
            }

            .c-icon path {
                transition: all 0.2s ease-in;
                fill: #ff9300;
            }
        }
        a {
            display: flex;
            align-items: center;
        }
    }

    @media screen and (max-width: 768px) {
        position: relative;
        height: 60px;
        width: 100%;

        .hamburger {
            position: absolute;
            cursor: pointer;
            right: 5%;
            top: 50%;
            transform: translate(-5%, -50%);
            -webkit-transform: translate(-5%, -50%);
            z-index: 2;
            transition: all 0.5s linear;

            .line {
                transition: all 0.5s linear;

                &.open {
                    margin: 9px;
                    &.middle {
                        /* transform: translateX(-50px); */
                        background: transparent;
                    }
                    &.top {
                        transform-origin: left;
                        transform: rotate(45deg);
                    }
                    &.bottom {
                        transform-origin: left;
                        transform: rotate(-45deg);
                    }
                }

                width: 30px;
                height: 2px;
                background-color: ${({ fg }) => fg};
                margin: 5px;
            }
        }

        ul {
            position: fixed;
            display: flex;
            flex-wrap: wrap;
            background-color: ${({ bg }) => bg};
            height: 100vh;
            width: 100vw;

            clip-path: circle(10px at 90% -10%);
            -webkit-clip-path: circle(10px at 90% -10%);

            transition: all 1s ease-out;
            &.open {
                clip-path: circle(1000px at 90% -10%);
                -webkit-clip-path: circle(1000px at 90% -10%);
            }

            li {
                width: 100%;
            }
        }
    }
`;
