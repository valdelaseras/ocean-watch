import React, { FC } from 'react';
import Checkbox from '../../../atomic/atoms/checkbox/Checkbox';
import FormField from '../../../atomic/molecules/form/form-field/FormField';
import DropdownCheckbox from '../../../atomic/molecules/dropdown-checkbox/DropdownCheckbox';
import Select from '../../../atomic/atoms/select/Select';
import FormGroup from '../../../atomic/molecules/form/form-group/FormGroup';
import Form from '../../../atomic/organisms/form/Form';
// import { Link } from 'react-router-dom';

// duplicate on dashboard
const distanceSortingOptions = [
  { id: '5km', value: '5km', title: 'Within 5km' },
  { id: '10km', value: '10km', title: 'Within 10km' },
  { id: '25km', value: '25km', title: 'Within 25km' },
  { id: 'all-distances', value: 'all distances', title: 'All' },
];

// TODO: displayed options within these formfields must be based on user subscription settings and
// checked boxes, default values etc. must be set accordingly.
// Also need to add options for 'low tide notifications' etc. if user is subscribed to that

const Notifications: FC = () => (
  <div className="column">
    <h2>Notifications</h2>
    <p>
      If you choose to enable push notifications, by default you will receive notifications for all sighting updates
      relevant to <span className="underlined">your subscriptions</span>. Below you may choose to customize your
      notifications further.
    </p>
    {/*TODO: turn into form, formgroups, formfields*/}
    <Form id="notifications-form">
      <div className="column">
        <div className="column three">
          <FormGroup id="notifications-general" title="General">
            <FormField valid={true}>
              <Checkbox
                title="Enable push notifications"
                id="pn-0"
                name="pn-permission"
                checked={true}
                required={false}
              />
            </FormField>
            {/*If user enables push notifications, show below options. Otherwise it can be hidden*/}
            {/*also add some option maybe for minimal 5 verifications on a sighting?*/}
            <FormField valid={true}>
              <Checkbox
                title="All sightings"
                id="pn-all-sightings"
                name="all-sightings"
                required={false}
                checked={true}
              />
            </FormField>
          </FormGroup>
        </div>
        <div className="column three">
          <FormGroup id="notifications-advanced" title="Advanced">
            <FormField valid={true}>
              <DropdownCheckbox id="pn-biomes" title="Biomes">
                <ul className="settings-list">
                  <li>
                    <Checkbox title="All biomes" id="pn-all-biomes" name="all-biomes" required={false} checked={true} />
                  </li>
                  <li>
                    <Checkbox title="Sky" id="pn-biome-sky" name="sky-biome" required={false} checked={true} />
                  </li>
                  <li>
                    <Checkbox title="Coast" id="pn-biome-coast" name="coast-biome" required={false} checked={true} />
                  </li>
                  <li>
                    <Checkbox
                      title="Surface"
                      id="pn-biome-surface"
                      name="surface-biome"
                      required={false}
                      checked={true}
                    />
                  </li>
                  <li>
                    <Checkbox
                      title="Below surface"
                      id="pn-biome-below-surface"
                      name="below-surface-biome"
                      required={false}
                      checked={true}
                    />
                  </li>
                  <li>
                    <Checkbox
                      title="Ocean floor"
                      id="pn-biome-floor"
                      name="floor-biome"
                      required={false}
                      checked={true}
                    />
                  </li>
                  <li>
                    <Checkbox title="Tide pools" id="pn-biome-tide" name="tide-biome" required={false} checked={true} />
                  </li>
                </ul>
              </DropdownCheckbox>
            </FormField>
            <FormField valid={true}>
              <DropdownCheckbox id="pn-species" title="Species">
                <ul className="settings-list">
                  <li>
                    <Checkbox
                      title="All species"
                      id="pn-all-species"
                      name="all-species"
                      required={false}
                      checked={true}
                    />
                  </li>
                  <li>
                    <p>...Species go here ( in family probably or this list will be super long )</p>
                  </li>
                </ul>
              </DropdownCheckbox>
            </FormField>
            <FormField valid={true}>
              <DropdownCheckbox id="pn-distance-dd" title="Distance">
                <ul className="settings-list">
                  <li>
                    <Select
                      id="pn-distance"
                      required={false}
                      defaultValue="Within 10km"
                      name="pn-distance"
                      children={distanceSortingOptions}
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

export default Notifications;
