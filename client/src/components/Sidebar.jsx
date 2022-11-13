import React from "react";
import "../Sidebar.css";
// import TwitterIcon from "@material-ui/icons/Twitter";
import SidebarOption from "./SidebarOption";
// import HomeIcon from "@material-ui/icons/Home";
// import SearchIcon from "@material-ui/icons/Search";
// import NotificationsNoneIcon from "@material-ui/icons/NotificationsNone";
// import MailOutlineIcon from "@material-ui/icons/MailOutline";
// import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
// import ListAltIcon from "@material-ui/icons/ListAlt";
// import PermIdentityIcon from "@material-ui/icons/PermIdentity";
// import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
// import { Button } from "@material-ui/core";

function Sidebar() {

  return (
    <div className="sidebar">
      {/* <TwitterIcon className="sidebar__twitterIcon" /> */}

      <SidebarOption /** Icon={HomeIcon} */ text="Home" />
      <SidebarOption /** Icon={HomeIcon} */ text="Explore" />
      <SidebarOption /** Icon={HomeIcon} */ text="Notifications" />
      <SidebarOption /** Icon={HomeIcon} */ text="Messages" />
      <SidebarOption /** Icon={HomeIcon} */ text="Bookmarks" />
      <SidebarOption /** Icon={HomeIcon} */ text="Lists"/>
      <SidebarOption /** Icon={HomeIcon} */ text="Profile"/>
      <SidebarOption /** Icon={HomeIcon} */ text="More" />

      {/* Button -> Tweet */}
      {/* <Button variant="outlined" className="sidebar__tweet" fullWidth>
        Tweet
      </Button> */}
    </div>
  );
}

export default Sidebar;