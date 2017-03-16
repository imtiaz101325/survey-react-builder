import React from 'react';
import { storiesOf, action, linkTo } from '@kadira/storybook';

import AddButtons from '../components/AddButtons';
import EditableSurvey from '../components/EditableSurvey';

import 'bootstrap/dist/css/bootstrap.css';
import 'survey-react/survey.css';

storiesOf('AddButtonsn', module)
  .add('with nothing', () => (
    <AddButtons addSingleInput={action('ADD_SINGLE_INPUT')}/>
  ));

storiesOf('EditableSurvey', module)
  .add('Single Input', () => (
    <EditableSurvey modelJSON={{
                                showNavigationButtons: false,
                                questions: [
                                    {
                                        type: "text",
                                        name: "question1"
                                    }
                                ]
                                }}
                    onDelete={action("DELETE_SINGLE_INPUT")} />
  ))

/**
import Button from './Button';
import Welcome from './Welcome';

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
**/
