import React from 'react';
import { action, storiesOf } from '@kadira/storybook';
import AppContainer from '../../containers/AppContainer';
import NumberInput from '../../elements/NumberInput';

const numberInputProps = {
  className: 'some-class',
  id: 'tj-input',
  label: 'Number Input',
  onChange: action('onChange'),
  onClick: action('onClick'),
  min: 0,
  max: 100,
  value: 50,
  step: 10,
};

storiesOf('NumberInput', module)
  .addDecorator((story) => (
    <AppContainer>
      {story()}
    </AppContainer>
  ))
  .addWithInfo(
    'enabled',
    `
      Number inputs are similar to text fields, but contain controls used to increase or decrease an incremental value.
      The example below shows an enabled Number Input component. The Number Input component can be
      passed a starting value, a min, a max, and the step.
    `,
    () => (
      <NumberInput {...numberInputProps} />
    )
  );

storiesOf('NumberInput', module)
  .addDecorator((story) => (
    <AppContainer>
      {story()}
    </AppContainer>
  ))
  .addWithInfo(
    'disabled',
    `
      Number inputs are similar to text fields, but contain controls used to increase or decrease an incremental value.
      The example below shows an disabled Number Input component. The Number Input component can be
      passed a starting value, a min, a max, and the step.
    `,
    () => (
      <NumberInput disabled {...numberInputProps} />
    )
  );
