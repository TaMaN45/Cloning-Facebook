import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Avatar, Paper, Divider, colors } from "@material-ui/core";
import { Scrollbars } from "react-custom-scrollbars";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import * as images from "../../assets/images/images";
import InfoBar from "../util/InfoBar";
import Style from "./Style";

const Sidebar = () => {
  const classes = Style();

  const [open, setOpen] = useState(false);

  const { photoURL, displayName } = useSelector((state) => state.user);

  const toggle = () => {
    setOpen(!open);
  };

  return (
    <Paper elevation={0} className={classes.sidebar}>
      <Scrollbars autoHide autoHideDuration={200}>
        {/* User info */}
        <InfoBar
          key={displayName}
          Source={<Avatar src={photoURL} />}
          title={displayName}
        />
        {/* Top item */}
        {topRows.map(({ src, title }, i) => (
          <InfoBar
            key={`info-top-${i}`}
            Source={<Avatar src={src} />}
            title={title}
            transform={true}
          />
        ))}
        
        {open && (
          <>
            {bottomRows.map(({ src, title }, i) => (
              <InfoBar
                key={`info-bottom-${i}`}
                Source={<Avatar src={src} />}
                title={title}
              />
            ))}
          </>
        )}
        {/* Toggle button (show more /show less) */}
        <InfoBar
          key={"expand-icon"}
          Source={
            <Avatar>
              <ExpandMoreIcon style={{ transform: open && "rotate(180deg)" }} />
            </Avatar>
          }
          title={open ? "See Less" : "See More"}
          onClick={toggle}
        />

        <Divider style={{ margin: "5px 10px" }} />

        {/* Your links section */}
        <h4 style={{ margin: "10px 10px" }}>Your shortcuts</h4>
        <>
          {yourLinks.map(({ src, title }, i) => (
            <InfoBar
              key={`info-links-${i}`}
              Source={<Avatar src={src} />}
              title={title}
            />
          ))}
        </>

        <Divider style={{ margin: "5px 10px" }} />
      </Scrollbars>
    </Paper>
  );
};

const topRows = [
  { src: images.FacebookFriends, title: "Friends" },
  { src: images.FacebookGroups, title: "Groups" },
  { src: images.FacebookMarketplace, title: "Marketplace" },
  { src: images.FacebookWatch, title: "Watch" },
  { src: images.FacebookMemories, title: "Memories" },
];

const bottomRows = [
  { src: images.FacebookAdCenter, title: "Ad Center" },
  { src: images.FacebookAdsManager, title: "Ads Manager" },
  { src: images.FacebookCommuinty, title: "Community Help" },
  { src: images.FacebookCovid, title: "Covid Information Center" },
  { src: images.FacebookHealthEmotional, title: "Emotional Health" },
  { src: images.FacebookEvents, title: "Events" },
  { src: images.FacebookPay, title: "Facebook Pay" },
  { src: images.FacebookFavourites, title: "Favourites" },
  { src: images.FacebookFundrisers, title: "Fundrisers" },
  { src: images.FacebookGamingVideos, title: "Gaming Videos" },
  { src: images.FacebookLive, title: "Live videos" },
  { src: images.FacebookMessanger, title: "Messenger" },
  { src: images.FacebookMessangerKids, title: "Messenger Kids" },
  { src: images.FacebookMostRecent, title: "Most Recent" },
  { src: images.FacebookPages, title: "Pages" },
  { src: images.FacebookPlayGames, title: "Play Games" },
  { src: images.FacebookActivities, title: "Recent Activities" },
  { src: images.FacebookSave, title: "Saved" },
  { src: images.FacebookWeather, title: "Weather" },
];

const yourLinks = [
  { src: images.RwangaFoundation, title: "Rwanga Foundation" },
  { src: images.SalahdinUniversity, title: "Salahdin University" },
  { src: images.RudawSport, title: "Rudaw Sport" },
  { src: images.KurdCinema, title: "Kurd Cinema" },
];


export default Sidebar;
