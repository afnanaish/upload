import { useMemo } from "react";

const useStyle = () => {
  const allClasses = useMemo(() => {
    return {
      dropzone: {
        border: "2px dashed #cccccc",
        padding: "20px",
        textAlign: "center",
      },

      fileList: {
        display: "flex",
        flexWrap: "wrap",
      },
      fileItem: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        minWidth: "200px",
        height: "200px",
        border: " 1px solid #cccccc",
      },
      preview: {
        maxWidth: "100px",
        minWidth: "50px",
        maxHeight: "100px",
        minHeight: "50px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        border: " 1px solid #cccccc",
      },
      fileIcon: {
        //width: "100px",
        minWidth: "fitContent",
        height: "100px",
        fontSize: "15px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f0f0f0",
        border: " 1px solid #cccccc",
      },
    };
  }, []);
  return { allClasses };
};

export { useStyle };
