import axios from "axios";
import { useState } from "react";
import { FileUploader } from "react-drag-drop-files";

const fileTypes = ["JPEG", "PNG", "GIF"];

export default function DragDrop() {
  const [file, setFile] = useState(null);


  const handleChange = (file) => {
    setFile(file);

    const fileReader = new FileReader()
    fileReader.readAsDataURL(file)

    fileReader.onload = () => {
      const fileURL = fileReader.result
      const config = { headers: { "content-type": 'application/json' } }

      axios.post('http://localhost:8000/profile-change', fileURL
        , config)
        .then(res => console.log('Image updated'))
        .catch(err => console.log('Error Occured'))
    }
  }
    console.log(file)

    return (
      <div className="drag-drop">
        <FileUploader
          handleChange={handleChange}
          name="file"
          types={fileTypes}
        />
        <p>{file ? `File: ${file.name}` : ""}</p>
      </div>
    );
  }
