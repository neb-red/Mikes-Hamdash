const topBarCenterText = `WX2ACE - WINTER WEATHER`;
// Menu items
// Structure is as follows HTML Color code, Option, target URL, scaling 1=Original Size, side (optional, nothing is Left, "R" is Right)
// The values are [color code, menu text, target link, scale factor, side],
// add new lines following the structure for extra menu options. The comma at the end is important!
const aURL = [
  ["add10d", "BACK", "#", "1"],
  ["add10d", "BACK", "#", "1", "R"],
  ["ff9100", "Refresh", "#", "1"],
  ["0dd1a7", "Help", "#", "1"],
  ["2196F3", "CLUBLOG", "https://clublog.org/livestream/VA3HDL", "1.7"],
  [
    "2196F3",
    "CONTEST",
    "https://www.contestcalendar.com/fivewkcal.html",
    "1",
  ],
  ["2196F3", "DX CLUSTER", "https://dxcluster.ha8tks.hu/map/", "1"],
  [
    "2196F3",
    "LIGHTNING",
    "https://map.blitzortung.org/#3.87/36.5/-89.41",
    "1",
    "R",
  ],
  ["2196F3", "PISTAR", "http://pi-star.local/", "1.2"],
  [
    "2196F3",
    "RADAR",
    "https://weather.gc.ca/?layers=alert,radar&center=43.39961001,-78.53212031&zoom=6&alertTableFilterProv=ON",
    "1",
    "R"
  ],
  ["2196F3", "TIME.IS", "https://time.is/", "1", "R"],
  [
    "2196F3",
    "WEATHER",
    "https://openweathermap.org/weathermap?basemap=map&cities=true&layer=temperature&lat=44.0157&lon=-79.4591&zoom=5",
    "1",
    "R",
  ],
  [
    "2196F3",
    "WINDS",
    "https://earth.nullschool.net/#current/wind/surface/level/orthographic=-78.79,44.09,3000",
    "1",
    "R",
  ],
];

// Dashboard items
// Structure is Title, Image Source URL
// [Title, Image Source URL],
// the comma at the end is important!
// You can't add more items because there are only 12 placeholders on the dashboard
// but you can replace the titles and the images with anything you want.
const aIMG = [
  ["CURRENT", "https://radar.weather.gov/ridge/standard/CONUS_loop.gif"],
  [
    "LOCAL RADAR",
    "https://radar.weather.gov/ridge/standard/KOAX_loop.gif",
  ],
  [
    "WATCHES/WARNINGS",
    "http://www.weather.gov/wwamap/png/oax.png",
  ],
  [
    "10 DAY",
    "https://webpubcontent.gray.tv/wowt/w24.jpg",
  ],
  [
    "LOCAL SATELLITE",
    "https://cdn.star.nesdis.noaa.gov/GOES16/ABI/SECTOR/umv/GEOCOLOR/GOES16-UMV-GEOCOLOR-600x600.gif",
  ],
  [
    "24HR PRECIP",
    "https://www.weather.gov/images/gid/Precipitation/Nebraska_1day_observation.jpg",
  ],
  [
    "ICE FORECAST",
    "https://www.weather.gov/images/oax/winter/StormTotalIceWeb_NE.jpg",
  ],
  [
    "SNOW FORECAST",
    "https://www.weather.gov/images/oax/ProbMessaging/StormTotalSnow_NE.png",
  ],
  ["Children's Hospital", "https://webpubcontent.gray.tv/wowt/cameras/childrens.jpg"],
  [
    "144th and Dodge",
    "https://webpubcontent.gray.tv/wowt/cameras/ubt.jpg",
  ],
  ["680 & IRVINGTON", "https://kubrick.htvapps.com/htv-prod-media.s3.amazonaws.com/images/dynamic/ketv/FairfieldInn.jpg?crop=1xw:1xh;center,top&resize=900:*"],
  ["114 & DODGE",
  "https://kubrick.htvapps.com/htv-prod-media.s3.amazonaws.com/images/dynamic/ketv/CharlesSchwab.jpg?crop=1xw:1xh;center,top&resize=900:*"],
];

// Image rotation intervals in milliseconds per tile - If the line below is commented, all tiles will be rotated every 30000 milliseconds (30s)
const tileDelay = [11200,10000,11000,10100,10200,10500,10300,10600,30400,60700,60900,10800];
