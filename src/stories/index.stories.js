/* eslint-disable react/react-in-jsx-scope */

import {storiesOf} from '@storybook/vue'
import {action} from '@storybook/addon-actions'
import {linkTo} from '@storybook/addon-links'

import MyButton from './MyButton.vue'
import Welcome from './Welcome.vue'
import HelloWorld from '../components/HelloWorld'

storiesOf('Welcome', module).add('to Storybook', () => ({
  components: {Welcome},
  template: '<welcome :showApp="action" />',
  methods: {action: linkTo('Button')},
}))

storiesOf('Button', module)
  .add('with text', () => ({
    components: {MyButton},
    template: '<my-button @click="action">Hello Button</my-button>',
    methods: {action: action('clicked')},
  }))
  // .add('with JSX', () => ({
  //   components: { MyButton },
  //   render() {
  //     return <my-button onClick={this.action}>With JSX</my-button>;
  //   },
  //   methods: { action: linkTo('clicked') },
  // }))
  .add('with some emoji', () => ({
    components: {MyButton},
    template:
      '<my-button @click="action"><span role="img" aria-label="so cool">😀 😎 👍 💯</span></my-button>',
    methods: {action: action('clicked')},
  }))

storiesOf('Hello World', module).add('to Storybook', () => ({
  components: {HelloWorld},
  template: '<hello-world/>',
  methods: {action: linkTo('Button')},
}))

/* eslint-enable react/react-in-jsx-scope */
