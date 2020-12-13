import React, { FC, useState } from 'react';
import Checkbox from '../../../atomic/atoms/checkbox/Checkbox';
import FormField from '../../../atomic/molecules/form/form-field/FormField';
import DropdownCheckbox from '../../../atomic/molecules/dropdown-checkbox/DropdownCheckbox';
import Select from '../../../atomic/atoms/select/Select';
import FormGroup from '../../../atomic/molecules/form/form-group/FormGroup';
import Form from '../../../atomic/organisms/form/Form';

const Notifications: FC = () => {
  const [enabledNotifications, setEnabledNotification] = useState(true);

  const enableNotifications = (checked: boolean) => {
    // api call
    return setEnabledNotification(checked);
  };

  return (
    <div className="column">
      <h2>Notifications</h2>
      <p>
        If you choose to enable push notifications, by default you will receive notifications for all sighting updates
        relevant to <span className="underlined">your subscriptions</span>. Below you may choose to customize your
        notifications further.
      </p>
      <Form id="notifications-form" className="settings-form">
        <div className="column">
          <div className="column three">
            <FormGroup id="notifications-general" title="General">
              <FormField valid={true}>
                <Checkbox
                  title="Enable push notifications"
                  id="pn-0"
                  name="pn-permission"
                  checked={enabledNotifications}
                  action={enableNotifications}
                  required={false}
                />
              </FormField>
              {enabledNotifications ? (
                <FormField valid={true}>
                  <Checkbox
                    title="All sightings"
                    id="pn-all-sightings"
                    name="all-sightings"
                    required={false}
                    checked={true}
                  />
                </FormField>
              ) : null}
            </FormGroup>
          </div>
          <div className="column three">
            <FormGroup id="notifications-advanced" title="Advanced">
              <FormField valid={true}>
                <DropdownCheckbox id="pn-biomes" title="Biomes">
                  <ul className="settings-list">
                    {biomeFilterOptions.map((biomeFilterOption) => (
                      <li key={biomeFilterOption.id}>
                        <Checkbox
                          title={biomeFilterOption.title}
                          id={biomeFilterOption.id}
                          name={biomeFilterOption.name}
                          required={biomeFilterOption.required}
                          checked={biomeFilterOption.checked}
                        />
                      </li>
                    ))}
                  </ul>
                </DropdownCheckbox>
              </FormField>
              <FormField valid={true}>
                <DropdownCheckbox id="pn-species" title="Species">
                  <ul className="settings-list">
                    {speciesFilterOptions.map((speciesFilterOption) => (
                      <li key={speciesFilterOption.id}>
                        <Checkbox
                          title={speciesFilterOption.title}
                          id={speciesFilterOption.id}
                          name={speciesFilterOption.name}
                          required={speciesFilterOption.required}
                          checked={speciesFilterOption.checked}
                        />
                      </li>
                    ))}
                  </ul>
                </DropdownCheckbox>
              </FormField>
              <FormField valid={true}>
                <DropdownCheckbox id="pn-distance-dd" title="Distance">
                  <ul className="settings-list">
                    <li>
                      <Select
                        id="pn-distance-select"
                        required={false}
                        defaultValue="Within 10km"
                        name="pn-distance"
                        children={distanceFilterOptions}
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
};

// TODO: displayed options within these formfields must be based on user subscription settings and
// checked boxes, default values etc. must be set accordingly.
// Also need to add options for 'low tide notifications' etc. if user is subscribed to that and other stuff like that

// duplicate on dashboard
const distanceFilterOptions = [
  { id: '5km', value: '5km', title: 'Within 5km' },
  { id: '10km', value: '10km', title: 'Within 10km' },
  { id: '25km', value: '25km', title: 'Within 25km' },
  { id: 'all-distances', value: 'all distances', title: 'All' },
];

const biomeFilterOptions = [
  { id: 'all-biomes', name: 'all-biomes', title: 'All biomes', required: false, checked: false },
  { id: 'sky', name: 'sky', title: 'Sky', required: false, checked: false },
  { id: 'coast', name: 'coast', title: 'Coast', required: false, checked: false },
  { id: 'surface', name: 'surface', title: 'Surface', required: false, checked: false },
  { id: 'below-surface', name: 'below-surface', title: 'Below surface', required: false, checked: false },
  { id: 'ocean-floor', name: 'ocean-floor', title: 'Ocean floor', required: false, checked: false },
  { id: 'tide-pools', name: 'tide-pools', title: 'Tide pools', required: false, checked: false },
];

// TODO: obviously need to think about this list properly
const speciesFilterOptions = [
  { id: 'dolphins', name: 'dolphins', title: 'Dolphins', required: true, checked: true },
  { id: 'whales', name: 'whales', title: 'Whales', required: false, checked: false },
  { id: 'seals', name: 'seals', title: 'Seals', required: false, checked: false },
  { id: 'invertebrates', name: 'invertebrates', title: 'Invertebrates', required: false, checked: false },
  { id: 'sea-birds', name: 'sea-birds', title: 'Sea birds', required: false, checked: false },
  { id: 'other', name: 'other', title: 'Other', required: false, checked: false },
];

export default Notifications;
