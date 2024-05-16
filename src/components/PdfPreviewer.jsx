/* eslint-disable react/prop-types */
import { Worker, Viewer } from "@react-pdf-viewer/core";
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";

// Import styles
import "@react-pdf-viewer/default-layout/lib/styles/index.css";
import "@react-pdf-viewer/core/lib/styles/index.css";

const workerUrl =
  "https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js";

const PdfPreviewer = ({ fileUrl }) => {
  const defaultLayoutPluginInstance = defaultLayoutPlugin();
  return (
    <Worker workerUrl={workerUrl}>
      <div className="preview-container">
        <h2 className="preview-heading">Preview:</h2>
        <Viewer fileUrl={fileUrl} plugins={[defaultLayoutPluginInstance]} />
      </div>
    </Worker>
  );
};

export default PdfPreviewer;
