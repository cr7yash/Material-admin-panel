import React from "react";
import { Badge, Avatar } from "@material-ui/core";

import { NotificationsNone, Language, Settings } from "@material-ui/icons";
import classes from "./TopBar.module.css";
export default function TopBar() {
  return (
    <div className={classes.TopBar}>
      <div className={classes.TopBarWrapper}>
        <div className={classes.TopLeft}>
          <span className={classes.Logo}>Admin</span>
        </div>
        <div className={classes.TopRight}>
          <div className={classes.TopBarIconContainer}>
            {/* <div className={classes.TopBarIcons}> */}
            <Badge badgeContent={4} color="primary">
              <NotificationsNone color="primary" />
            </Badge>
          </div>
          <div className={classes.TopBarIconContainer}>
            <Badge color="primary">
              <Language color="primary" />
            </Badge>
          </div>
          <div className={classes.TopBarIconContainer}>
            <Badge color="primary">
              <Settings color="primary" />
            </Badge>
          </div>
          <div className={classes.TopBarIconContainer}>
            <Avatar>H</Avatar>
          </div>
        </div>
      </div>
    </div>
  );
}
