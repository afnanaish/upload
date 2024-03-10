import React from "react";
import { RiDeleteBinLine } from "react-icons/ri";
import { useStyle } from "./style.js";
import { useUpload } from "./useUplod.js";

const Upload = () => {
  const { allClasses } = useStyle();
  const { files,getFileIcon, onDelete, getRootProps, getInputProps } = useUpload();

  return (
    <div>
      <div {...getRootProps()} style={allClasses.dropzone}>
        <input {...getInputProps()} />
        <div>Drop files or click to select files</div>
      </div>
      <div style={allClasses.fileList}>
        {files.map((file, index) => (
          <div key={index} style={allClasses.fileItem}>
            {file.type.startsWith("image") ? (
              <img
                src={URL.createObjectURL(file)}
                alt={file.name}
                style={allClasses.preview}
              />
            ) : (
              <>
                {getFileIcon(file.name)}
                <div style={allClasses.fileIcon}>
                  {file.name.split(".").slice(0, -1)}
                </div>
              </>
            )}
            <button onClick={() => onDelete(index)}>
              <RiDeleteBinLine />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export { Upload };
