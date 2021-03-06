/*!

=========================================================
* Paper Dashboard React - v1.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-dashboard-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)

* Licensed under MIT (https://github.com/creativetimofficial/paper-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import Dashboard from "views/Dashboard.js";
import Notifications from "views/Notifications.js";
import Icons from "views/Icons.js";
import Typography from "views/Typography.js";
import TableList from "views/Tables.js";
import Maps from "views/Map.js";
import UserPage from "views/User.js";
import UpgradeToPro from "views/Upgrade.js";
import Forest from "views/Forest.js";
import Ventura from "views/Ventura";
import Redwood from "views/RedwoodForest";

var routes = [
  {
    path: "/beach",
    name: "Malibu Beach",

    component: Dashboard,
    layout: "/admin",
  },
  {
    path: "/beach2",
    name: "Redwood Forest",

    component: Forest,
    layout: "/admin",
  },
  {
    path: "/beach3",
    name: "Ventura Beach",

    component: Ventura,
    layout: "/admin",
  },
  {
    path: "/redwood",
    name: "Hamoa Beach",

    component: Redwood,
    layout: "/admin",
  },
];
export default routes;
