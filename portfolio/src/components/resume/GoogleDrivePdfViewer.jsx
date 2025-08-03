import React from "react";

const GoogleDrivePdfViewer = ({ fileId }) => {
  const previewUrl = `https://drive.google.com/file/d/${fileId}/preview`;
  const downloadUrl = `https://drive.google.com/uc?export=download&id=${fileId}`;

  return (
    <div className="w-full flex flex-col items-center space-y-4">
      <div className="w-full max-w-4xl h-[80vh] border border-gray-300 rounded-lg overflow-hidden shadow-md">
        <iframe
          src={previewUrl}
          className="w-full h-full"
          allow="autoplay"
          title="Google Drive PDF Viewer"
        />
      </div>
      <a
        href={downloadUrl}
        className="resume-download-button"
        download
      >
        Download Resume
      </a>
    </div>
  );
};

export default GoogleDrivePdfViewer;
