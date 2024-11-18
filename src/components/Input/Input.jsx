import Button from "../Button/Button";
import s from "./input.module.css";

function Input({ handleSetLink, value, handleSetFiles }) {
  const handleButtonClick = () => {
    document.getElementById("fileInput").click();
  };

  const handleFileChange = (e) => {
    const filesArray = Array.from(e.target.files);
    handleSetFiles(filesArray);
  };

  return (
    <label className={s.label}>
      <input
        className={s.input}
        placeholder="Вставьте ссылку"
        onChange={handleSetLink}
        value={value}
      />
      <input
        className={s.hiddenInput}
        type="file"
        id="fileInput"
        webkitdirectory="true"
        multiple
        onChange={handleFileChange}
      />
      <span className="or">или</span>
      <Button
        text="Загрузить файлы"
        color="#912F2F"
        onClick={handleButtonClick}
      />
    </label>
  );
}

export default Input;
