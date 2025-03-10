import "../css/trnslator.css";
import { MdGTranslate } from "react-icons/md";

const Translator = () => {
  return (
    <div className="translator-container">
      <MdGTranslate className="translator-icon" size={20} />
      <select
        className="translator-select"
        onChange={(e) => changeLanguage(e.target.value)}
      >
        <option value="en">English</option>
        <option value="hi">हिंदी</option>
      </select>
      <div id="google_translate_element" style={{ display: "none" }}></div>
    </div>
  );
};

export default Translator;
