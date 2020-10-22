import React, { FC } from 'react';
import FormField from '../../../atomic/molecules/form/form-field/FormField';
import DropdownCheckbox from '../../../atomic/molecules/dropdown-checkbox/DropdownCheckbox';
import FormGroup from '../../../atomic/molecules/form/form-group/FormGroup';
import Form from '../../../atomic/organisms/form/Form';
import Select from '../../../atomic/atoms/select/Select';

// TODO: light and dark theme must be simple themes, the rest can be fancy pansy
const themes = [
  { id: 'light-theme', value: 'light-theme', title: 'Light' },
  { id: 'dark-theme', value: 'dark-theme', title: 'Dark' },
  { id: 'auto-theme', value: 'auto-theme', title: 'Auto' },
  { id: 'dolphin-theme', value: 'dolphin-theme', title: 'Dolphin' },
  { id: 'nudibranch-theme', value: 'nudibranch-theme', title: 'Nudibranch' },
  { id: 'octopus-theme', value: 'octopus-theme', title: 'Octopus' },
  { id: 'tide-pool-theme', value: 'tide-pool-theme', title: 'Tide pool' },
];

const fontFamilies = [
  { id: 'default-ff', value: 'default-ff', title: 'Default' },
  { id: 'some-ff', value: 'some-ff', title: 'Some ff' },
];

const fontSizes = [
  { id: 'default-fs', value: 'default-fs', title: 'Default' },
  { id: 'large-fs', value: 'large-fs', title: 'Large' },
  { id: 'xl-fs', value: 'xl-fs', title: 'Extra large' },
];

// const language = [
//     { id: 'english', value: 'english', title: 'English' },
//     { id: 'te-reo', value: 'te-reo', title: 'Te Reo' },
// ];

const VisualSettings: FC = () => (
  <div className="column">
    <h2>Visual preferences</h2>
    <p>Set your app preferences</p>
    <Form id="visual-settings-form" className="settings-form">
      <div className="column">
        <div className="column three">
          <FormGroup id="visual-settings">
            <FormField valid={true}>
              <DropdownCheckbox id="theme" title="Theme">
                <ul className="settings-list">
                  <li>
                    <Select
                      id="theme-select"
                      required={false}
                      defaultValue="Light theme"
                      name="theme-select"
                      children={themes}
                    />
                  </li>
                </ul>
              </DropdownCheckbox>
            </FormField>
            <FormField valid={true}>
              <DropdownCheckbox id="fonts" title="Fonts">
                <ul className="settings-list">
                  <li>
                    <Select
                      title="Font family"
                      id="ff-select"
                      required={false}
                      defaultValue="Default"
                      name="ff-select"
                      children={fontFamilies}
                    />
                  </li>
                  <li>
                    <Select
                      title="Font size"
                      id="fs-select"
                      required={false}
                      defaultValue="Default"
                      name="fs-select"
                      children={fontSizes}
                    />
                  </li>
                </ul>
              </DropdownCheckbox>
            </FormField>
          </FormGroup>
        </div>
      </div>
    </Form>
  </div>
);

export default VisualSettings;
