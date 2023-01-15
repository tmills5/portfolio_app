import { Document,Page } from 'react-pdf/dist/esm/entry.webpack';
import test from '../assets/documents/TysonMillsResumeFullStack.docx.pdf';

function ResumeViewer() {
  return (
    <div id=".resume-pdf-container">
      <Document className='resume-pdf' file={test}>
        <Page pageNumber={1} />
      </Document>
    </div>
  );
}

export default ResumeViewer;
