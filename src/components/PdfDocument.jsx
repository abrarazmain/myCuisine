import React from "react";
import { Document, Page} from "react-pdf";

const PdfDocument = () => {
  return (
    <div>
      <Document>
        <Page>
          <Text>
            The differences between uncontrolled and controlled components?
          </Text>
          <Text>
            In React JS, components can also be classified as either controlled
            or uncontrolled. Controlled components are those that are fully
            controlled by the application's state, meaning that their behavior
            and output can be managed and adjusted through changes in the state.
            In contrast, uncontrolled components are those that are driven by
            their internal state, and their behavior and output cannot be
            controlled or adjusted externally.
          </Text>
        </Page>
      </Document>
    </div>
  );
};

export default PdfDocument;
