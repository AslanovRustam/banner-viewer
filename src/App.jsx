import { useState } from "react";
import Title from "./components/Title/Title";
import Input from "./components/Input/Input";
import Button from "./components/Button/Button";
import "./index.css";

function App() {
  const [link, setLink] = useState("");
  const [files, setFiles] = useState([]);
  const [indexFiles, setIndexFiles] = useState([]);

  const handleSetLink = (e) => {
    setLink(e.target.value);
  };

  const handleSetFiles = (files) => {
    setFiles(files);
    const indexFilesFound = files.filter((file) =>
      file.webkitRelativePath.endsWith("index.html")
    );

    if (indexFilesFound.length > 0) {
      setIndexFiles(indexFilesFound);
      console.log("Найдены файлы index.html:", indexFilesFound);
    } else {
      setIndexFiles([]);
      console.log("Файлы index.html не найдены.");
    }
  };
  console.log("files", files);

  return (
    <section className="container">
      <Title text="Загрузите работу" />
      <Input
        handleSetLink={handleSetLink}
        value={link}
        handleSetFiles={handleSetFiles}
      />
      <div className="btnContainer">
        <Button text="Готово" color="#2D2D2D" />
      </div>
      {indexFiles.length > 0 ? (
        <ul>
          {indexFiles.map((file, index) => (
            <li key={index}>
              Найден файл: <strong>{file.webkitRelativePath}</strong>
            </li>
          ))}
        </ul>
      ) : (
        <p>Файлы index.html не найдены.</p>
      )}
    </section>
  );
}

export default App;
