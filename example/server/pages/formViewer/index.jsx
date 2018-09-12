import React from 'react';
import FormViewer from 'formViewer';
import formData from 'shared/schema/formData';
import Workflow from 'workflow';

function FormViewerExample() {
  const props = {
    apiUrl: __HOST_API__,
    processDefinitionId:
      (window._demoMockData_ || {}).processDefinitionId || 'maintenanceProcess:1:182507',
    taskKey: (window._demoMockData_ || {}).taskKey || 'one',
    customComponents: {
      Workflow,
    },
  };

  return <FormViewer {...props} formData={formData} />;
}

export default FormViewerExample;
