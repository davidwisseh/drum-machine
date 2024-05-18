import { combineReducers } from "@reduxjs/toolkit";
import workitkick from "./sounds/workitkick.wav";
import melodykick from "./sounds/melodykick.wav";
import monicahit from "./sounds/monica-hit.wav";
import movehit from "./sounds/move-hit.wav";
import naturekick from "./sounds/nature-kick.wav";
import ptroy from "./sounds/p-troy.wav";
import pharellhit from "./sounds/pharell-hit.wav";
import pianohit from "./sounds/piano-hit.wav";
import pimphit from "./sounds/pimp-hit.wav";
import rkellyhit from "./sounds/rkellyhit.wav";
import realclubhit from "./sounds/realclubhit.wav";
import rockhit from "./sounds/rockhit.wav";
import shorthit from "./sounds/shorthit.wav";
import sizzlahit from "./sounds/sizzlahit.wav";
import sizzlahit2 from "./sounds/sizzlahit2.wav";
import softhit from "./sounds/softhit.wav";
import swisshit from "./sounds/swisshit.wav";
import tromobonehit from "./sounds/tromobonehit.wav";

const sounds = [
  [
    { name: "work it kick", src: workitkick },
    { name: "melody kick", src: melodykick },
    { name: "monica hit", src: monicahit },
    { name: "move hit", src: movehit },
    { name: "nature kick", src: naturekick },
    { name: "p-troy", src: ptroy },
    { name: "pharell hit", src: pharellhit },
    { name: "piano hit", src: pianohit },
    { name: "pimp hit", src: pimphit },
  ],
  [
    { name: "rkelly hit", src: rkellyhit },
    { name: "real club hit", src: realclubhit },
    { name: "rock hit", src: rockhit },
    { name: "short hit", src: shorthit },
    { name: "sizzla hit", src: sizzlahit },
    { name: "sizzla hit 2", src: sizzlahit2 },
    { name: "soft hit", src: softhit },
    { name: "swiss hit", src: swisshit },
    { name: "tromobone hit", src: tromobonehit },
  ],
];

const soundsReducer = (state = { sounds: sounds[0], index: 0 }, action) => {
  switch (action.type) {
    case "CHANGE_SOUND":
      const index = state.index + 1;
      if (index < sounds.length) {
        return { sounds: sounds[index], index: index };
      } else {
        return { sounds: sounds[0], index: 0 };
      }
    default:
      return state;
  }
};

const displayReducer = (state = "by: David Wisseh", action) => {
  switch (action.type) {
    case "DISPLAY":
      return action.payload;
    default:
      return state;
  }
};

const onReducer = (state = true, action) => {
  switch (action.type) {
    case "POWER_ON":
      return true;
    case "POWER_OFF":
      return false;
    default:
      return state;
  }
};

const volumeReducer = (state = 0.5, action) => {
  switch (action.type) {
    case "VOLUME":
      return action.payload;
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  sounds: soundsReducer,
  display: displayReducer,
  on: onReducer,
  volume: volumeReducer,

  // Add reducers here
});

export default rootReducer;
