import React from 'react';
import GoogleDrivePdfViewer from '../components/resume/GoogleDrivePdfViewer';

function Resume() {
  const fileId = '1E1P6lIf7gUN1b41U-3QssNaW6sfGuPTG';

  return (
    <section id="Resume" className="section text-center p-8">
      <h2 className="text-3xl font-bold mb-4">Resume</h2>
      <p className="text-lg mb-6">
        This is a copy of my current resume. To download a copy, click the 'Download Resume' button below!
      </p>
      <GoogleDrivePdfViewer fileId={fileId} />
    </section>
  );
}

export default Resume;
