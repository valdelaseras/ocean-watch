import React, { FC } from 'react';
import Section from '../../../layout/section/Section';
import Content from '../../../layout/content/Content';
import Form from '../../../atomic/organisms/form/Form';
import FormGroup from '../../../atomic/molecules/form/form-group/FormGroup';
import FormField from '../../../atomic/molecules/form/form-field/FormField';
import Input from '../../../atomic/atoms/input/Input';
import Checkbox from '../../../atomic/atoms/checkbox/Checkbox';
import Fieldset from '../../../atomic/molecules/form/fieldset/Fieldset';

// https://www.doc.govt.nz/nature/native-animals/marine-mammals/marine-mammal-sightings/marine-mammal-sighting-form/

const SightingForm: FC = () => (
  <Section id="sighting-form" title="New sighting">
    <Content colSize="column">
      <Form id="new-sighting-form">
        {/*TODO: In settings we can create an additional option to turn off all tips so
            they never display. If users know how the app works, all these tip panels are just
             extra components cluttering the views */}
        {/*TODO: create below tip-panel as component*/}
        {/*TODO: user must also be able to swipe it left or right to hide it*/}
        <div className="tip-panel">
          <Fieldset title="Tip">
            <div className="close-panel">X</div>
            <p>
              If you want to post quickly, only fill in the required fields. You, and other Watchers, can always update
              and add details in the optional fields to your sighting after it has been posted.
            </p>
          </Fieldset>
        </div>

        <FormGroup id="sighting-mandatory" title="Required">
          <FormField valid={false} key="species">
            {/*TODO: if these remains inputs, it needs autofill / suggestions. */}
            {/*Users must be prevented from just typing anything here (species, location)/}
                    {/*Otherwise turn it into a select but this is not great, as users*/}
            {/*may have to search a long time to find what they want to post or*/}
            {/*it may not even be there at all*/}
            <Input
              id="ns-species"
              name="ns-species"
              type="text"
              placeholder="What have you sighted?"
              defaultValue=""
              required={true}
            />
          </FormField>
          <FormField valid={false} key="location">
            <Input
              id="ns-location"
              name="ns-location"
              type="text"
              placeholder="Location"
              defaultValue=""
              required={true}
            />
          </FormField>
          <FormField valid={false} key="amount">
            {/*It would be cool if the species are dolphins or something that */}
            {/*you can choose from single / a few / decent pod / large pod / super pod etc.*/}
            <Input
              id="ns-amount"
              name="ns-amount"
              type="number"
              placeholder="Number of animal(s)"
              defaultValue=""
              required={true}
            />
          </FormField>
          <FormField valid={true} key="real-time">
            {/*If user unchecks this, the formfield below is shown. */}
            {/*Otherwise it remains hidden*/}
            <Checkbox
              id="ns-realtime"
              title="This is happening now"
              checked={true}
              name="ns-realtime"
              required={false}
            />
          </FormField>
          {/*<FormField valid={false} key="time-stamp">*/}
          {/*    Datepicker with timestamp thing goes here*/}
          {/*</FormField>*/}
          <FormField valid={true} key="ns-health">
            {/*If user unchecks this, emergency hotline information must be displayed */}
            {/*so user can contact the right people immediately */}
            <Checkbox id="ns-health" title="Animal(s) seem healthy" checked={true} name="ns-health" required={false} />
          </FormField>
        </FormGroup>
        {/*TODO: after required formgroup is done, submit button appears bottom fixed, the same*/}
        {/*position and style as post new sighting button*/}
        <div className="tip-panel">
          <Fieldset title="Tip">
            <div className="close-panel">X</div>
            <p>
              We encourage you to fill out as many of the optional fields as possible. Detailed sightings are
              appreciated because the information can be valuable. You may fill this out at a later time, after your
              Watch is over.
            </p>
          </Fieldset>
        </div>
        <FormGroup id="sighting-optional" title="Optional">
          <FormField valid={true} key="sighting-tip">
            {/*TODO: add maxlength / character counter */}
            <Input
              id="ns-tip"
              text="Write a short sighting tip or other valuable information to your fellow Watchers"
              name="ns-tip"
              type="text"
              placeholder="Your sighting tip or comment"
              maxLength={200}
              defaultValue={''}
            />
          </FormField>
          <FormField valid={true} key="ns-behaviour">
            {/*TODO: add maxlength / character counter */}
            <Input
              id="ns-behaviour"
              name="ns-behaviour"
              type="text"
              placeholder="What are the animals doing?"
              maxLength={200}
              defaultValue={''}
            />
          </FormField>
          <FormField valid={true} key="ns-direction">
            {/*TODO: add maxlength / character counter */}
            <Input
              id="ns-direction"
              text="If the animals seem to be headed in a certain direction, leave a comment here."
              name="ns-direction"
              type="text"
              placeholder="Direction"
              maxLength={200}
              defaultValue={''}
            />
          </FormField>
          <FormField valid={true} key="ns-juveniles">
            <Checkbox
              id="ns-juveniles"
              title="Do you see any juveniles or calves?"
              checked={false}
              name="ns-juveniles"
              required={false}
            />
            {/*TODO: if checked, show number input asking estimated number of juveniles*/}
          </FormField>
        </FormGroup>
      </Form>
    </Content>
  </Section>
);

export default SightingForm;
