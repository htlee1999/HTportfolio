import React, { useEffect } from 'react';
import { FaFileAlt, FaGlobe, FaDownload } from 'react-icons/fa';

const PDFViewer = ({ pdfUrl, isOpen, onClose }) => {
  const isSharePointUrl = pdfUrl && (pdfUrl.includes('sharepoint.com') || pdfUrl.includes('smu-my.sharepoint'));
  const isRegularWebsite = pdfUrl && pdfUrl.startsWith('http') && !pdfUrl.endsWith('.pdf');

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="pdf-modal-overlay" onClick={onClose}>
      <div className="pdf-modal-content" onClick={e => e.stopPropagation()}>
        <div className="pdf-modal-header">
          <h3>
            {isSharePointUrl ? 'SharePoint Document' :
             isRegularWebsite ? 'External Website' :
             'Document Viewer'}
          </h3>
          <button className="pdf-modal-close" onClick={onClose} aria-label="Close document viewer">×</button>
        </div>

        <div className="pdf-modal-body">
          {isSharePointUrl ? (
            <div className="sharepoint-fallback">
              <div className="fallback-icon">
                <FaFileAlt size={48} />
              </div>
              <p>This document is hosted on SharePoint and cannot be displayed directly in this viewer.</p>
              <a
                href={pdfUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="external-link-button"
              >
                Open Document in New Tab
              </a>
            </div>
          ) : isRegularWebsite ? (
            <div className="website-fallback">
              <div className="fallback-icon">
                <FaGlobe size={48} />
              </div>
              <p>This is a live website and will open in a new tab.</p>
              <a
                href={pdfUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="external-link-button"
              >
                Open Website in New Tab
              </a>
            </div>
          ) : (
            <iframe
              src={`${pdfUrl}#view=FitH`}
              title="PDF Viewer"
              width="100%"
              height="100%"
              className="pdf-iframe"
            />
          )}
        </div>

        <div className="pdf-modal-footer">
          {!isRegularWebsite && (
            <a
              href={pdfUrl}
              download
              target="_blank"
              rel="noopener noreferrer"
              className="pdf-download-button"
            >
              <FaDownload size={18} />
              Download
            </a>
          )}
          <button onClick={onClose} className="pdf-close-button" aria-label="Close document viewer">
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default PDFViewer;
