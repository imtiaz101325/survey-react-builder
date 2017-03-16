import React from 'react';
import {storiesOf, action, linkTo} from '@kadira/storybook';

import Button from './Button';
import Welcome from './Welcome';

import AddButtons from '../components/AddButtons';
import EditableSurvey from '../components/EditableSurvey';

import 'bootstrap/dist/css/bootstrap.css';
import 'survey-react/survey.css';

storiesOf('AddButtons', module)
  .add('Render all buttons', () => (
    <AddButtons actions={[
      {
        color: 'primary',
        name: 'Single Input',
        action: () => action("ADD_SINGLE_INPUT")
      },
      {
        color: 'Secondary',
        name: 'Checkboxes',
        action: () => action("ADD_CHECKBOX")
      }
    ]} />
  ));

storiesOf('EditableSurvey', module)
  .add('Single Input', () => (<EditableSurvey modelJSON={{
    showNavigationButtons: false,
    questions: [
        {
            type: "text",
            name: "question1"
        }
    ]
    }} onDelete={action("DELETE_SINGLE_INPUT")}/>))

storiesOf('Welcome', module)
  .add('to Storybook', () => (
    <Welcome showApp={linkTo('Button')}/>
  ));

storiesOf('Button', module)
  .add('with text', () => (
    <Button onClick={action('clicked')}>Hello Button</Button>
  ))
  .add('with some emoji', () => (
    <Button onClick={action('clicked')}>😀 😎 👍 💯</Button>
  ));
