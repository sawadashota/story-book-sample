/* eslint-disable react/react-in-jsx-scope */

import {storiesOf} from '@storybook/vue'
import {action} from '@storybook/addon-actions'
import {linkTo} from '@storybook/addon-links'
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs';
import { withNotes } from '@storybook/addon-notes'

import MyButton from './MyButton.vue'
import Welcome from './Welcome.vue'
import HelloWorld from '../components/HelloWorld'

storiesOf('Welcome', module).add('to Storybook', () => ({
  components: {Welcome},
  template: '<welcome :showApp="action" />',
  methods: {action: linkTo('Button')},
}))

storiesOf('Button', module)
  .addDecorator(withKnobs)
  .add('with text knobs', withNotes(
    `これはボタンです`
  )(() => {
    const slot = text('Slot', 'Hello KNOBS');

    return {
      components: {MyButton},
      template: `<my-button @click="action">${slot}</my-button>`,
      methods: {action: action('clicked')},
    }
  }))
  .add('with some emoji', withNotes(
    `絵文字も使えます`
  )(() => {
    const slot = text('Slot', '<span role="img" aria-label="so cool">😀 😎 👍 💯</span>');

    return {
      components: {MyButton},
      template: `<my-button @click="action">${slot}</my-button>`,
      methods: {action: action('clicked')},
    }
  }))

storiesOf('Hello World', module).add('to Storybook', () => ({
  components: {HelloWorld},
  template: '<hello-world/>',
  methods: {action: linkTo('Button')},
}))

/* eslint-enable react/react-in-jsx-scope */
