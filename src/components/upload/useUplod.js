import { useState } from "react";
import { useDropzone } from "react-dropzone";
import { FaFilePdf, FaFileWord, FaFile } from "react-icons/fa";

const useUpload = () => {
  const [files, setFiles] = useState([]);
  const getFileIcon = (fileName) => {
    const extension = fileName.split(".").pop().toLowerCase();
    switch (extension) {
      case "pdf":
        return <FaFilePdf style={{ color: "red" }} />;
      case "docx":
        return <FaFileWord style={{ color: "blue" }} />;
      default:
        return <FaFile style={{ color: "#d1a02e59" }} />;
    }
  };
  const onDrop = (acceptedFiles) => {
    setFiles((prevFiles) => [...prevFiles, ...acceptedFiles]);
  };

  const onDelete = (fileIndex) => {
    setFiles((prevFiles) =>
      prevFiles.filter((_, index) => index !== fileIndex)
    );
  };

  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  return {
    files,
    getFileIcon,
    onDrop,
    onDelete,
    getRootProps,
    getInputProps,
  };
};

export { useUpload };
