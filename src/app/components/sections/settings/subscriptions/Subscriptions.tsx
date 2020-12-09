import React, { FC } from 'react';
import Checkbox from '../../../atomic/atoms/checkbox/Checkbox';
import FormField from '../../../atomic/molecules/form/form-field/FormField';
import DropdownCheckbox from '../../../atomic/molecules/dropdown-checkbox/DropdownCheckbox';
import FormGroup from '../../../atomic/molecules/form/form-group/FormGroup';
import Form from '../../../atomic/organisms/form/Form';

const Subscriptions: FC = () => (
  <div className="column">
    <h2>Subscriptions</h2>
    <p>Lorem ipsum dolphins</p>
    <Form id="subscriptions-form" className="settings-form">
      <div className="column">
        <div className="column three">
          <FormGroup id="subscriptions-general" title="">
            <FormField valid={true}>
              <DropdownCheckbox id="subscription-regions" title="Regions">
                <ul className="settings-list">
                  {groupRegions.map((groupRegion) => (
                    <li key={groupRegion.id}>
                      <Checkbox
                        title={groupRegion.title}
                        id={groupRegion.id}
                        name={groupRegion.name}
                        required={groupRegion.required}
                        checked={groupRegion.checked}
                      />
                    </li>
                  ))}
                </ul>
                <h3>North Island</h3>
                <ul className="settings-list">
                  {northIslandRegions.map((northIslandRegion) => (
                    <li key={northIslandRegion.id}>
                      <Checkbox
                        title={northIslandRegion.title}
                        id={northIslandRegion.id}
                        name={northIslandRegion.name}
                        required={northIslandRegion.required}
                        checked={northIslandRegion.checked}
                      />
                    </li>
                  ))}
                </ul>
                <h3>South Island</h3>
                <ul className="settings-list">
                  {southIslandRegions.map((southIslandRegion) => (
                    <li key={southIslandRegion.id}>
                      <Checkbox
                        title={southIslandRegion.title}
                        id={southIslandRegion.id}
                        name={southIslandRegion.name}
                        required={southIslandRegion.required}
                        checked={southIslandRegion.checked}
                      />
                    </li>
                  ))}
                </ul>
              </DropdownCheckbox>
            </FormField>
            <FormField valid={true}>
              <DropdownCheckbox id="subscriptions-biomes" title="Biomes">
                <ul className="settings-list">
                  {biomes.map((biome) => (
                    <li key={biome.id}>
                      <Checkbox
                        title={biome.title}
                        id={biome.id}
                        name={biome.name}
                        required={biome.required}
                        checked={biome.checked}
                      />
                    </li>
                  ))}
                </ul>
              </DropdownCheckbox>
            </FormField>
          </FormGroup>
        </div>
      </div>
    </Form>
  </div>
);

const groupRegions = [
  { id: 'all-regions', name: 'all-regions', title: 'All regions', required: false, checked: false },
  { id: 'ni-regions', name: 'ni-regions', title: 'All North Island regions', required: false, checked: true },
  { id: 'si-regions', name: 'si-regions', title: 'All South Island regions', required: false, checked: false },
];

const northIslandRegions = [
  { id: 'northland', name: 'northland-region', title: 'Northland', required: false, checked: true },
  { id: 'auckland', name: 'auckland-region', title: 'Auckland', required: false, checked: true },
  { id: 'waikato', name: 'waikato-region', title: 'Waikato', required: false, checked: true },
  { id: 'bay-of-plenty', name: 'bay-of-plenty-region', title: 'Bay of Plenty', required: false, checked: true },
  { id: 'gisborne', name: 'gisborne-region', title: 'Gisborne', required: false, checked: true },
  { id: 'hawkes-bay', name: 'hawkes-bay-region', title: "Hawke's Bay", required: false, checked: true },
  { id: 'taranaki', name: 'taranaki-region', title: 'Taranaki', required: false, checked: true },
  {
    id: 'manawatu-whanganui',
    name: 'manawatu-whanganui-region',
    title: 'Manawatu Whanganui',
    required: false,
    checked: true,
  },
  { id: 'wellington', name: 'wellington-region', title: 'Wellington', required: false, checked: true },
];

const biomes = [
  { id: 'all-biomes', name: 'all-biomes', title: 'All biomes', required: false, checked: true },
  { id: 'sky', name: 'sky', title: 'Sky', required: false, checked: true },
  { id: 'coast', name: 'coast', title: 'Coast', required: false, checked: true },
  { id: 'surface', name: 'surface', title: 'Surface', required: false, checked: true },
  { id: 'below-surface', name: 'below-surface', title: 'Below surface', required: false, checked: true },
  { id: 'ocean-floor', name: 'ocean-floor', title: 'Ocean floor', required: false, checked: true },
  { id: 'tide-pools', name: 'tide-pools', title: 'Tide pools', required: false, checked: true },
];

const southIslandRegions = [
  { id: 'tasman', name: 'tasman-region', title: 'Tasman', required: false, checked: false },
  { id: 'nelson', name: 'nelson-region', title: 'Nelson', required: false, checked: false },
  { id: 'marlborough', name: 'marlborough-region', title: 'Marlborough', required: false, checked: false },
  { id: 'west-coast', name: 'west-coast-region', title: 'West Coast', required: false, checked: false },
  { id: 'canterbury', name: 'canterbury-region', title: 'Canterbury', required: false, checked: false },
  { id: 'otago', name: 'otago-region', title: 'Otago', required: false, checked: false },
  { id: 'southland', name: 'southland-region', title: 'Soutland', required: false, checked: false },
];

export default Subscriptions;
