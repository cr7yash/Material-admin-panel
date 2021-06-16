import { LineStyle, Assessment, TrendingUp } from "@material-ui/icons";

import "./SideBar.css";
export default function SideBar() {
  return (
    <div className="SideBar">
      <div className="SideBarWrapper">
        <div className="SideBarMenu">
          <h3 className="SideBarTitle">Dashboard</h3>
          <ul className="SideBarList">
            <li className="SideBarListItem">
              <LineStyle className="SideBarIcon" />
              Menu
            </li>
            <li className="SideBarListItem">
              <Assessment className="SideBarIcon" />
              Analytics
            </li>
            <li className="SideBarListItem">
              <TrendingUp className="SideBarIcon" />
              Sales
            </li>
          </ul>
        </div>
        <div className="SideBarMenu">
          <h3 className="SideBarTitle">Quick Menu</h3>
          <ul className="SideBarList">
            <li className="SideBarListItem">
              <LineStyle className="SideBarIcon" />
              Menu
            </li>
            <li className="SideBarListItem">
              <Assessment className="SideBarIcon" />
              Analytics
            </li>
            <li className="SideBarListItem">
              <TrendingUp className="SideBarIcon" />
              Sales
            </li>
          </ul>
        </div>
        <div className="SideBarMenu">
          <h3 className="SideBarTitle">Notifications</h3>
          <ul className="SideBarList">
            <li className="SideBarListItem">
              <LineStyle className="SideBarIcon" />
              Menu
            </li>
            <li className="SideBarListItem">
              <Assessment className="SideBarIcon" />
              Analytics
            </li>
            <li className="SideBarListItem">
              <TrendingUp className="SideBarIcon" />
              Sales
            </li>
          </ul>
        </div>
        <div className="SideBarMenu">
          <h3 className="SideBarTitle">Staff</h3>
          <ul className="SideBarList">
            <li className="SideBarListItem">
              <LineStyle className="SideBarIcon" />
              Menu
            </li>
            <li className="SideBarListItem">
              <Assessment className="SideBarIcon" />
              Analytics
            </li>
            <li className="SideBarListItem">
              <TrendingUp className="SideBarIcon" />
              Sales
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
