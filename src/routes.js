/*!

=========================================================
* Black Dashboard PRO React - v1.2.4
=========================================================

* Product Page: https://www.creative-tim.com/product/black-dashboard-pro-react
* Copyright 2024 Creative Tim (https://www.creative-tim.com)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import VectorMap from "views/maps/VectorMap.js";
import GoogleMaps from "views/maps/GoogleMaps.js";
import FullScreenMap from "views/maps/FullScreenMap.js";
import ReactTables from "views/tables/ReactTables.js";
import RegularTables from "views/tables/RegularTables.js";
import ExtendedTables from "views/tables/ExtendedTables.js";
import Wizard from "views/forms/Wizard.js";
import ValidationForms from "views/forms/ValidationForms.js";
import ExtendedForms from "views/forms/ExtendedForms.js";
import RegularForms from "views/forms/RegularForms.js";
import Calendar from "views/Calendar.js";
import Widgets from "views/Widgets.js";
import Charts from "views/Charts.js";
import Dashboard from "views/Dashboard.js";
import Buttons from "views/components/Buttons.js";
import SweetAlert from "views/components/SweetAlert.js";
import Notifications from "views/components/Notifications.js";
import Grid from "views/components/Grid.js";
import Typography from "views/components/Typography.js";
import Panels from "views/components/Panels.js";
import Icons from "views/components/Icons.js";
import Pricing from "views/pages/Pricing.js";
import Register from "views/pages/Register.js";
import DocumentChat from "views/pages/DocumentChat";
import User from "views/pages/User.js";
import Login from "views/pages/Login.js";
import Rtl from "views/pages/Rtl.js";
import DocumentVault from "views/pages/DocumentVault";
import DocumentUpload from "views/pages/DocumentUpload";
import IconGrid from "views/pages/Icons";
import { PiSparkle } from "react-icons/pi";

const routes = [
  {
    path: "/document-chat",
    name: "DOCUMENT CHAT",
    icon: "tim-icons icon-chat-33",
    component: <DocumentChat />,
    layout: "/admin",
  },
  {
    path: "/document-vault",
    name: "DOCUMENT VAULT",
    icon: "tim-icons icon-single-copy-04",
    component: <DocumentVault />,
    layout: "/admin",
  },
  {
    path: "/advance-search",
    name: "ADVANCED SEARCH",

    icon: "tim-icons icon-spaceship",
    component: <IconGrid />,
    layout: "/admin",
  },
  {
    path: "/document-upload",
    name: "DOCUMENT UPLOAD",

    icon: "tim-icons icon-cloud-upload-94",
    component: <DocumentUpload />,
    layout: "/admin",
  },
  {
    path: "/assistant",
    name: "ASSISTANT",
    icon: "tim-icons icon-bulb-63",
    component: <Dashboard />,
    layout: "/admin",
  },
  {
    path: "/dashboard",
    name: "DASHBOARD",

    icon: "tim-icons icon-chart-pie-36",
    component: <Dashboard />,
    layout: "/admin",
  },
  {
    path: "/",
    name: "SHARE",

    icon: "tim-icons icon-chart-pie-36",
    component: <Dashboard />,
    layout: "/admin",
  },
  // {
  //   collapse: true,
  //   name: "Pages",
  //   rtlName: "صفحات",
  //   icon: "tim-icons icon-image-02",
  //   state: "pagesCollapse",
  //   views: [
  //     {
  //       path: "/pricing",
  //       name: "Pricing",
  //       rtlName: "عالتسعير",
  //       mini: "P",
  //       rtlMini: "ع",
  //       component: <Pricing />,
  //       layout: "/auth",
  //     },
  //     {
  //       path: "/rtl-support",
  //       name: "RTL Support",
  //       rtlName: "صودعم رتل",
  //       mini: "RS",
  //       rtlMini: "صو",
  //       component: <Rtl />,
  //       layout: "/rtl",
  //     },
  //     {
  //       path: "/timeline",
  //       name: "Timeline",
  //       rtlName: "تيالجدول الزمني",
  //       mini: "T",
  //       rtlMini: "تي",
  //       component: <Timeline />,
  //       layout: "/admin",
  //     },
  //     {
  //       path: "/login",
  //       name: "Login",
  //       rtlName: "هعذاتسجيل الدخول",
  //       mini: "L",
  //       rtlMini: "هعذا",
  //       component: <Login />,
  //       layout: "/auth",
  //     },
  //     {
  //       path: "/register",
  //       name: "Register",
  //       rtlName: "تسجيل",
  //       mini: "R",
  //       rtlMini: "صع",
  //       component: <Register />,
  //       layout: "/auth",
  //     },
  //     {
  //       path: "/lock-screen",
  //       name: "Lock Screen",
  //       rtlName: "اقفل الشاشة",
  //       mini: "LS",
  //       rtlMini: "هذاع",
  //       component: <Lock />,
  //       layout: "/auth",
  //     },
  //     {
  //       path: "/user-profile",
  //       name: "User Profile",
  //       rtlName: "ملف تعريفي للمستخدم",
  //       mini: "UP",
  //       rtlMini: "شع",
  //       component: <User />,
  //       layout: "/admin",
  //     },
  //   ],
  // },
  {
    path: "/",
    name: "ACCOUNT",
    icon: "tim-icons icon-single-02",
    component: <Dashboard />,
    layout: "/admin",
  }

];

export default routes;
