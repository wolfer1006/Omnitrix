/*import clock from "clock";
import * as document from "document";
import { preferences } from "user-settings";
import * as util from "../common/utils";

// Update the clock every minute
clock.granularity = "minutes";

// Get a handle on the <text> element
const myLabel = document.getElementById("myLabel");

// Update the <text> element every tick with the current time
clock.ontick = (evt) => {
  let today = evt.date;
  let hours = today.getHours();
  if (preferences.clockDisplay === "12h") {
    // 12h format
    hours = hours % 12 || 12;
  } else {
    // 24h format
    hours = util.zeroPad(hours);
  }
  let mins = util.zeroPad(today.getMinutes());
  myLabel.text = `${hours}:${mins}`;
}*/


import * as document from "document";
import { me } from "appbit"

//Constant logic
const states = {
  STARTUP: "startup",
  ALIENS: "aliens",
  ACTIVATE: "activate",
  SHUTDOWN: "shutdown"
}

const aliens = {
  HEATBLAST: "Omnitrix_Heatblast_Scaled.png",
  CANNONBOLT: "Omnitrix_Cannonbolt_Scaled.png",
  DIAMONDHEAD: "Omnitrix_Diamondhead_Scaled.png",
  FOUR_ARMS: "Omnitrix_Four_Arms_Scaled.png",
  GHOSTFREAK: "Omnitrix_Ghostfreak_Scaled.png",
  UPGRADE: "Omnitrix_Upgrade_Scaled.png",
  WAY_BIG: "Omnitrix_Way_Big_Scaled.png",
  ALIEN_X: "Omnitrix_Alien_X_Scaled.png",
  EYE_GUY: "Omnitrix_Eye_Guy_Scaled.png",
  GREY_MATTER: "Omnitrix_Grey_Matter_Scaled.png",
  RIPJAWS: "Omnitrix_Ripjaws_Scaled.png",
  STINKFLY: "Omnitrix_Stinkfly_Scaled.png",
  WILDMUTT: "Omnitrix_Wildmutt_Scaled.png",
  WILDVINE: "Omnitrix_Wildvine_Scaled.png",
  XLR8: "Omnitrix_XLR8_Scaled.png",
  ECHO_ECHO: "Omnitrix_Echo_Echo_Scaled.png",
  GOOP: "Omnitrix_Goop_Scaled.png",
  CHROMASTONE: "Omnitrix_Chromastone_Scaled.png",
  UPCHUCK: "Omnitrix_Upchuck_Scaled.png",
  FRANKENSTRIKE: "Omnitrix_Frankenstrike_Scaled.png",
  ARCTIGUANA: "Omnitrix_Arctiguana_Scaled.png",
  BUZZSHOCK: "Omnitrix_Buzzshock_Scaled.png",
  BLITZWOLFER: "Omnitrix_Blitzwolfer_Scaled.png"
}

var state = states.STARTUP;
var alien = aliens.HEATBLAST;

var ignoreClick = false;

//Start logic
console.log("Constructed");

if (me.appTimeoutEnabled) {
 console.log("Timeout is enabled");
}
me.appTimeoutEnabled = false; // Disable timeout
if (me.appTimeoutEnabled) {
 console.log("Timeout is enabled");
}

let omnitrix = document.getElementById("btnStart");

omnitrix.addEventListener("click", (evt) => {
  switch (state) {
    case states.STARTUP:
      console.log("click in startup");
      omnitrix.href = aliens.HEATBLAST;
      state = states.ALIENS;
      break;
    case states.ALIENS:
      console.log("click in aliens");
      if(!ignoreClick){
        omnitrix.href = "Omnitrix_Activate_Scaled_3.png";
        state = states.ACTIVATE;
        setTimeout(
          () => {
            console.log("Timeout after 4 seconds");
            omnitrix.href = "Omnitrix_Red_Scaled_5.png";
            state = states.SHUTDOWN;
          },
          4 * 1000
        );
      }
      ignoreClick = false;
      break;
    case states.ACTIVATE:
      console.log("click in activate");
      break;
    case states.SHUTDOWN:
      console.log("click in shutdown");
      omnitrix.href = "Omnitrix_Startup_Scaled_3.png";
      state = states.STARTUP;
      break;
  }
  
});

//Detect swipes
var x = 0;
var y = 0;

omnitrix.addEventListener("mousedown", (evt) => {
  console.log("Mouse Down");
  x = evt.screenX;
  y = evt.screenY;
})

//omnitrix.addEventListener("mousemove", (evt) => {
  //console.log(`Mouse moved - x: ${evt.screenX}, y: ${evt.screenY}`);
//})

omnitrix.addEventListener("mouseup", (evt) => {
  console.log("Mouse Up");
  //Only care about swipes in states.ALIENS
  if(state == states.ALIENS){
    let xMove = evt.screenX - x;
    let yMove = evt.screenY - y;
    
    if (xMove< -60) {
      //swipe left  
      ignoreClick = true;
      console.log("Swipe Left");
      switch (omnitrix.href) {
        case aliens.HEATBLAST:
          omnitrix.href = aliens.CANNONBOLT;
          break;
        case aliens.CANNONBOLT:
          omnitrix.href = aliens.DIAMONDHEAD;
          break;
        case aliens.DIAMONDHEAD:
          omnitrix.href = aliens.FOUR_ARMS;
          break;
        case aliens.FOUR_ARMS:
          omnitrix.href = aliens.GHOSTFREAK;
          break;
        case aliens.GHOSTFREAK:
          omnitrix.href = aliens.UPGRADE;
          break;
        case aliens.UPGRADE:
          omnitrix.href = aliens.WAY_BIG;
          break;
        case aliens.WAY_BIG:
          omnitrix.href = aliens.ALIEN_X;
          break;
        case aliens.ALIEN_X:
          omnitrix.href = aliens.EYE_GUY;
          break;
        case aliens.EYE_GUY:
          omnitrix.href = aliens.GREY_MATTER;
          break;
        case aliens.GREY_MATTER:
          omnitrix.href = aliens.RIPJAWS;
          break;
        case aliens.RIPJAWS:
          omnitrix.href = aliens.STINKFLY;
          break;
        case aliens.STINKFLY:
          omnitrix.href = aliens.WILDMUTT;
          break;
        case aliens.WILDMUTT:
          omnitrix.href = aliens.WILDVINE;
          break;
        case aliens.WILDVINE:
          omnitrix.href = aliens.XLR8;
          break;
        case aliens.XLR8:
          omnitrix.href = aliens.ECHO_ECHO;
          break;
        case aliens.ECHO_ECHO:
          omnitrix.href = aliens.GOOP;
          break;
        case aliens.GOOP:
          omnitrix.href = aliens.CHROMASTONE;
          break;
        case aliens.CHROMASTONE:
          omnitrix.href = aliens.UPCHUCK;
          break;
        case aliens.UPCHUCK:
          omnitrix.href = aliens.FRANKENSTRIKE;
          break;
        case aliens.FRANKENSTRIKE:
          omnitrix.href = aliens.ARCTIGUANA;
          break;
        case aliens.ARCTIGUANA:
          omnitrix.href = aliens.BUZZSHOCK;
          break;
        case aliens.BUZZSHOCK:
          omnitrix.href = aliens.BLITZWOLFER;
          break;
        case aliens.BLITZWOLFER:
          omnitrix.href = aliens.HEATBLAST;
          break;
      }
    }
    else if (xMove> 60) {
      //swipe right
      ignoreClick = true;
      console.log("Swipe Right");
      switch (omnitrix.href) {
        case aliens.HEATBLAST:
          omnitrix.href = aliens.BLITZWOLFER;
          break;
        case aliens.CANNONBOLT:
          omnitrix.href = aliens.HEATBLAST;
          break;
        case aliens.DIAMONDHEAD:
          omnitrix.href = aliens.CANNONBOLT;
          break;
        case aliens.FOUR_ARMS:
          omnitrix.href = aliens.DIAMONDHEAD;
          break;
        case aliens.GHOSTFREAK:
          omnitrix.href = aliens.FOUR_ARMS;
          break;
        case aliens.UPGRADE:
          omnitrix.href = aliens.GHOSTFREAK;
          break;
        case aliens.WAY_BIG:
          omnitrix.href = aliens.UPGRADE;
          break;
        case aliens.ALIEN_X:
          omnitrix.href = aliens.WAY_BIG;
          break;
        case aliens.EYE_GUY:
          omnitrix.href = aliens.ALIEN_X;
          break;
        case aliens.GREY_MATTER:
          omnitrix.href = aliens.EYE_GUY;
          break;
        case aliens.RIPJAWS:
          omnitrix.href = aliens.GREY_MATTER;
          break;
        case aliens.STINKFLY:
          omnitrix.href = aliens.RIPJAWS;
          break;
        case aliens.WILDMUTT:
          omnitrix.href = aliens.STINKFLY;
          break;
        case aliens.WILDVINE:
          omnitrix.href = aliens.WILDMUTT;
          break;
        case aliens.XLR8:
          omnitrix.href = aliens.WILDVINE;
          break;
        case aliens.ECHO_ECHO:
          omnitrix.href = aliens.XLR8;
          break;
        case aliens.GOOP:
          omnitrix.href = aliens.ECHO_ECHO;
          break;
        case aliens.CHROMASTONE:
          omnitrix.href = aliens.GOOP;
          break;
        case aliens.UPCHUCK:
          omnitrix.href = aliens.CHROMASTONE;
          break;
        case aliens.FRANKENSTRIKE:
          omnitrix.href = aliens.UPCHUCK;
          break;
        case aliens.ARCTIGUANA:
          omnitrix.href = aliens.FRANKENSTRIKE;
          break;
        case aliens.BUZZSHOCK:
          omnitrix.href = aliens.ARCTIGUANA;
          break;
        case aliens.BLITZWOLFER:
          omnitrix.href = aliens.BUZZSHOCK;
          break;
      }
    };
    console.log(omnitrix.href);
    //if (yMove< -60) {//swipe up  };
    //if (yMove> 60) {//swipe down};
  }
  
})