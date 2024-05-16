/* eslint-disable react/prop-types */
import { MdOutlineCloudUpload } from "react-icons/md";
import { useDropzone } from "react-dropzone";
import { useCallback, useState } from "react";

const FileUploader = ({ onFileSelect }) => {
  const [file, setFile] = useState(null);

  const onDrop = useCallback(
    (acceptedFiles) => {
      // Do something with the files
      const selectedFile = acceptedFiles[0];
      setFile(selectedFile);
      onFileSelect(selectedFile);
    },
    [onFileSelect]
  );

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: "pdf",
  });
  return (
    <div className="file-upload" {...getRootProps()}>
      <MdOutlineCloudUpload size={32} color="grey" />
      <input {...getInputProps()} />
      <p>Drag and drop a pdf file here, or click to select one</p>
      {file && <p>Selected File: {file.name}</p>}
    </div>
  );
};

export default FileUploader;
