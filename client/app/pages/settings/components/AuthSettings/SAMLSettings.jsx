import React from "react";
import Form from "antd/lib/form";
import Checkbox from "antd/lib/checkbox";
import Input from "antd/lib/input";
import { SettingsEditorPropTypes, SettingsEditorDefaultProps } from "../prop-types";

export default function SAMLSettings({ values, onChange }) {
  return (
    <React.Fragment>
      <h4>SAML</h4>
      <Form.Item>
        <Checkbox
          name="auth_saml_enabled"
          checked={values.auth_saml_enabled}
          onChange={e => onChange("auth_saml_enabled", e.target.checked)}>
          SAML Enabled
        </Checkbox>
      </Form.Item>
      {values.auth_saml_enabled && (
        <div>
          <Form.Item label="SAML Metadata URL">
            <Input
              value={values.auth_saml_metadata_url}
              onChange={e => onChange("auth_saml_metadata_url", e.target.value)}
            />
          </Form.Item>
          <Form.Item label="SAML Entity ID">
            <Input value={values.auth_saml_entity_id} onChange={e => onChange("auth_saml_entity_id", e.target.value)} />
          </Form.Item>
          <Form.Item label="SAML NameID Format">
            <Input
              value={values.auth_saml_nameid_format}
              onChange={e => onChange("auth_saml_nameid_format", e.target.value)}
            />
          </Form.Item>
        </div>
      )}
    </React.Fragment>
  );
}

SAMLSettings.propTypes = SettingsEditorPropTypes;

SAMLSettings.defaultProps = SettingsEditorDefaultProps;
