import { Document, Page } from 'react-pdf/dist/esm/entry.webpack';
import test from '../assets/documents/TysonMillsResumeFullStack.docx.pdf';

function ResumeViewer() {
  return (
    <Document file={test}>
      <Page pageNumber={1} />
    </Document>
  );
}

export default ResumeViewer;
