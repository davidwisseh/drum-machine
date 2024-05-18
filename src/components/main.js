import DrumPad from "./drumPad";
import { useDispatch, useSelector } from "react-redux";
import "./main.css";
import { Col, Container, Row } from "react-bootstrap";
import $ from "jquery";
import "bootstrap-icons/font/bootstrap-icons.css";
const Main = () => {
  const dispatch = useDispatch();
  const sounds = useSelector((state) => state.sounds.sounds);
  const letters = ["Q", "W", "E", "A", "S", "D", "Z", "X", "C"];
  const display = useSelector((state) => state.display);
  const indx = useSelector((state) => state.sounds.index);
  const isOn = useSelector((state) => state.on);

  const changeBank = () => {
    if (!isOn) return;
    dispatch({ type: "CHANGE_SOUND" });
    dispatch({ type: "DISPLAY", payload: "Bank: " + (indx + 1) });
    setTimeout(() => {
      dispatch({ type: "DISPLAY", payload: "" });
    }, 1000);
  };

  const changeVolume = (e) => {
    const volume = e.target.value;

    dispatch({
      type: "DISPLAY",
      payload: "Volume: " + Math.round(volume * 100) + "%",
    });

    setTimeout(() => {
      dispatch({ type: "DISPLAY", payload: "" });
    }, 1000);
    dispatch({ type: "VOLUME", payload: volume });
  };

  const power = () => {
    if (isOn) {
      dispatch({ type: "POWER_OFF" });
      $(".bi-power").css("color", "red");
      $("#volume").css("pointer-events", "none");
      dispatch({ type: "DISPLAY", payload: "" });
    } else {
      dispatch({ type: "POWER_ON" });
      $(".bi-power").css("color", "greenyellow");
      $("#volume").css("pointer-events", "all");
    }
  };
  return (
    <Container id="drum-machine" className="main">
      <div id="drum-pad-section">
        {sounds.map((sound, index) => (
          <DrumPad
            isOn={isOn}
            name={sound.name}
            key={index}
            letter={letters[index]}
            index={index}
            src={sound.src}
          />
        ))}
      </div>
      <div id="display">{display}</div>
      <div id="slider-container">
        <input
          type="range"
          id="volume"
          name="volume"
          min="0"
          max="1"
          step="0.01"
          onChange={changeVolume}
        />
      </div>
      <Row className="row">
        <Col className="col col-4">
          <p>Power</p>
          <button type="button" id="power" onClick={power} className="btn ">
            <i className="bi bi-power"></i>
          </button>
        </Col>
        <Col className="col col-4">
          <p>Next Bank</p>

          <i id="swap" onClick={changeBank} className="bi bi-skip-end "></i>
        </Col>
      </Row>
    </Container>
  );
};

export default Main;
