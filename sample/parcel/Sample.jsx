import React, { useState } from 'react';
import { Document, Page } from 'react-pdf/dist/esm/entry.parcel';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';

import './Sample.less';

import pdfFile from './sample.pdf';

const options = {
  cMapUrl: 'cmaps/',
  cMapPacked: true,
};

export default function Sample() {
  const [file, setFile] = useState(pdfFile);
  const [numPages, setNumPages] = useState(null);
  const [width, setWidth] = useState(500);

  function onFileChange(event) {
    setFile(event.target.files[0]);
  }

  function onDocumentLoadSuccess({ numPages: nextNumPages }) {
    setNumPages(nextNumPages);
  }

  return (
    <div className="Example">
      <header>
        <h1>react-pdf sample page</h1>
        <button onClick={() => setWidth(width + 100)}>sdsd</button>
      </header>
      <div className="Example__container">
        <div className="Example__container__load">
          <label htmlFor="file">Load from file:</label>
          {' '}
          <input
            onChange={onFileChange}
            type="file"
          />
        </div>
        <div className="Example__container__document">
          <Document
            //file={file}
            file={{
          url: 'https://tj-master-pg.softplan.io/pd-documentos/processo/1U00000200000/documento/93301/pagina/1?format=pdf',
          httpHeaders: {
            Authorization: `Bearer eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJndEN1ZEU1ckhIVmtXdTc5a0t2Ymt1RXN6SlJ4eWVTY0RkcXZMajB5U1MwIn0.eyJleHAiOjE2MTYxMDg5NTEsImlhdCI6MTYxNjA3NzI2NywiYXV0aF90aW1lIjoxNjE2MDcyOTUxLCJqdGkiOiI4MWRlZGIwNy03NjYxLTQyZDktYTU1OS04OGM4YjMzZTcyMDUiLCJpc3MiOiJodHRwczovL2lkZW50aXR5LXBsYXRmb3JtLnNvZnRwbGFuLmlvL2F1dGgvcmVhbG1zL1NBSi1USi1NQVNURVItUEciLCJhdWQiOiJhY2NvdW50Iiwic3ViIjoiZjo2OGZjZGIwOC05ZGY4LTQ4OTQtYWEzMS04OWQwYTFiNzc5MjU6QUxFTUFOSEFURVNURSIsInR5cCI6IkJlYXJlciIsImF6cCI6InNhaiIsIm5vbmNlIjoiMjUyNzk5N2YtZWQwYS00MmE5LTg3MGEtMTM0NTViNGU4N2ZhIiwic2Vzc2lvbl9zdGF0ZSI6IjcxZjM3MDk4LTA1NDMtNGMxYi1hZjI4LWZiNmQwOTUwZTU0MyIsImFjciI6IjAiLCJhbGxvd2VkLW9yaWdpbnMiOlsiKiJdLCJyZWFsbV9hY2Nlc3MiOnsicm9sZXMiOlsib2ZmbGluZV9hY2Nlc3MiLCJ1bWFfYXV0aG9yaXphdGlvbiJdfSwicmVzb3VyY2VfYWNjZXNzIjp7ImFjY291bnQiOnsicm9sZXMiOlsibWFuYWdlLWFjY291bnQiLCJtYW5hZ2UtYWNjb3VudC1saW5rcyIsInZpZXctcHJvZmlsZSJdfX0sInNjb3BlIjoib3BlbmlkIGVtYWlsIHByb2ZpbGUiLCJncm91cF9tZW1iZXJzaGlwIjpbXSwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJ1c2VyX3JlYWxtX3JvbGVzIjpbIm9mZmxpbmVfYWNjZXNzIiwidW1hX2F1dGhvcml6YXRpb24iXSwibmFtZSI6IkFMRU1BTkhBVEVTVEUiLCJwcmVmZXJyZWRfdXNlcm5hbWUiOiJBTEVNQU5IQVRFU1RFIiwiZ2l2ZW5fbmFtZSI6IkFMRU1BTkhBVEVTVEUiLCJmYW1pbHlfbmFtZSI6IiIsImVtYWlsIjoiYWxlbWFuaGF0ZXN0ZUBzb2Z0cGxhbi5jb20uYnIifQ.tbof8M4pmoXq84vXCSHWbmcMFhztRGYApgE9W0Eu4jjwMEhJOiUQqWww0wNzQYIcKSyCWoyBS1KO8MRWIUkgiNOyWWGsaXB69mvz5SMvJ7KAgCYpelbV6BmIFORYLfci_f75kdsy6Ai1V_OBzHZjQ6koMgfJUyjRPtjJy9pyWpUFbjBqoAuJtyQDtyCIs0B3kbR-B-8UHk5GZJ4kHXG51pOK_jBqEFsFEwh3azjtm2qD9UVFIoF-EfdX5-pDzp8RdcN-ScVI7TYOgHAVvjNti0MV9hZkhGgICZ2gThEfWed1ZcXYLs-ExCAOBBVVXN8LZ2q5vGi2iRwBX75-KBjeFg`,
            lotacao: 364
          }
        }}
            onLoadSuccess={onDocumentLoadSuccess}
            options={options}
          >
            {
              Array.from(
                new Array(numPages),
                (el, index) => (
                  <Page
                    key={`page_${index + 1}`}
                    pageNumber={index + 1}
                    width={width}
                  />
                ),
              )
            }
          </Document>
        </div>
      </div>
    </div>
  );
}
