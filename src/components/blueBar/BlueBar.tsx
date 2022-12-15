import Close from "/assets/close.svg";
import "./BlueBar.scss";
interface props {
  classes: string;
  close: string;
  icon: string;
}
function BlueBar({ classes, close, icon }: props) {
  return (
    <>
      <div className={`blue-bar ${classes}`}>
        <p className="bar__label">Pixel Run</p>
        <button className={`close ${close}`}>
          <img className={`close__icon ${icon}`} src={Close}></img>
        </button>
      </div>
    </>
  );
}

export default BlueBar;
