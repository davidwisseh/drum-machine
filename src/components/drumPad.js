import { Button } from "react-bootstrap";
import "./drumpad.css";
import $ from "jquery";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

const DrumPad = ({ letter, index, src, name }) => {
  const dispatch = useDispatch();
  const volume = useSelector((state) => state.volume);
  let isOn = useSelector((state) => state.on);
  const playSound = (on) => {
    $("#button" + index).addClass("active");
    setTimeout(() => {
      $("#button" + index).removeClass("active");
    }, 100);

    if (on) {
      dispatch({ type: "DISPLAY", payload: name });
      const audio = document.getElementById(letter);
      audio.volume = volume;
      audio.play().then(() => {
        audio.currentTime = 0;
      });
    }
  };

  useEffect(() => {
    return () => {
      $(document).on("keydown", (e) => {
        if (e.key.toUpperCase() === letter) {
          $("#button" + index).trigger("click");
        }
      });
    };
  }, []);

  return (
    <button
      id={"button" + index}
      type="button"
      className="btn drum-pad"
      onClick={() => {
        playSound(isOn);
      }}
    >
      {letter}
      <audio
        id={letter}
        typeof="audio/wav"
        className="drum-pad__audio clip"
        src={src}
      />
    </button>
  );
};

export default DrumPad;
