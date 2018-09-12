import React from 'react';
import { Button } from 'antd';
import FormApply from 'formApply';
import Workflow from 'workflow';

class FormApplyExample extends React.Component {
  _refs = {
    formApply: null,
  };

  handleClick = () => {
    // 异步方法，会先做校验
    this._refs.formApply.getFormData().then(() => {
      // console.log(formData);
    });
  };

  render() {
    const props = {
      apiUrl: __HOST_API__,
      processDefinitionId:
        (window._demoMockData_ || {}).processDefinitionId || 'maintenanceProcess:1:182507',
      taskKey: (window._demoMockData_ || {}).taskKey || 'one',
      customComponents: {
        Workflow,
      },
    };

    return (
      <div>
        <FormApply
          ref={element => {
            this._refs.formApply = element;
          }}
          {...props}
        />

        <Button type="primary" onClick={this.handleClick}>
          获取表单数据
        </Button>
      </div>
    );
  }
}

export default FormApplyExample;
