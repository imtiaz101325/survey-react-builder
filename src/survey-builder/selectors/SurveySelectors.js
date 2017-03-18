import { createSelector } from 'reselect';

export const tabsArray = state => state.tabs;
export const pagesObject = state => state.entities.pages;
export const questionsObject = state => state.entities.questions;
// export const triggersObject = state => state.entities.triggers;
export const selectedTab = state => state.ui.surveyTab.selectedTab;
export const getModal = state => state.ui.modal.open;
export const modalOption = state => state.ui.modal.option;
export const modalOptionId = state => state.ui.modal.id;
export const getSurveyOptions = state => state.surveyOptions;


export const getTabs = createSelector(
  [tabsArray, pagesObject],
  (tabs, pages) => {
    return tabs.map(
      tab => ({
        id: tab,
        name: pages[tab].name
      })
    )
  }
);

export const getQuestions = createSelector(
  [ questionsObject, selectedTab, pagesObject ],
  (questions, tab, pages) => {
    if(Object.keys(pages).length ){
      const questionsInTab = pages[tab].questions;

      const questionsArray = questionsInTab.map(
        id => ({
            questionModel: questions[id],
            id
          })
      )

      return questionsArray;
    }

    return [];
  }
);

export const renderTabLevel = createSelector(
  [tabsArray, pagesObject],
  (tabs, pages) => {
    return tabs.map(
        id => {
          const page = pages[id];

          Object.keys(page).forEach(
            key => {
              if(page[key].value){
                page[key] = page[key].value;
              }
            }
          )

          return page;
        }
      )
    }
);

export const renderPageLevel = createSelector(
  [renderTabLevel, questionsObject],
  (pages, questionsEntity) => {
    return {
      pages: pages.map(
        ({questions, ...rest}) => {
          rest.navigationButtonsVisibility = 'iherit';
          return {
            ...rest,
            questions: questions.map(
              id => {
                const question = questionsEntity[id];

                Object.keys(question).forEach(
                  key => {
                    if(question[key].value){
                      question[key] = question[key].value;
                    }
                  }
                )

                return question;
              }
            )
          }
        }
      )
    }

  }
);

export const getPreview = createSelector(
  [getSurveyOptions, renderPageLevel],
  (options, renderedPage) => {
    Object.keys(options).forEach(
      key => {
        if(options[key].value){
          options[key] = options[key].value;
        }
      }
    )

    return {
      ...options,
      ...renderedPage,
    }
  }
);

export const getModalOption = createSelector(
  [modalOption, modalOptionId, getSurveyOptions, pagesObject, questionsObject],
  (modal, id, options, pages, questionsObj)=> {
    if (modal === 'SURVEY') {
      const {
        triggers,
        completedHtml,
        ...General,
      } = options;      

      return {
        options: {
          General,
          Triggers: triggers,
          'Completed HTML': completedHtml,
        },
        type: modal,
        selected: id,
      };
    }

    if (modal === 'PAGE') {
      const page = pages[id];

      const {
        questions,
        ...rest
      } = page;

      const {
        visibleIf,
        ...General,
      } = rest;

      return {
        options: {
          General,
          'Visible If': visibleIf,
        },
        type: modal,
        selected: id,
      }
    }

    if (modal === 'QUESTION') {
      const question = questionsObj[id];

      if(    question.type !== 'text'
          && question.type !== 'comment'
          && question.type !== 'rating' ) {

        const {
          validators,
          visibleIf,
          choices,
          ...General
        } = question;

        return {
          options: {
            General,
            Choices: choices,
            Validators: validators,
            'Visible If': visibleIf,
          },
          type: modal,
          selected: id,
        }
      }

      if (question.type === 'rating') {
        const {
          validators,
          visibleIf,
          rateValues,
          ...General
        } = question;

        return {
          options: {
            General,
            'Rate Values': rateValues,
            Validators: validators,
            'Visible If': visibleIf,
          },
          type: modal,
          selected: id,
        }
      }

      const {
        validators,
        visibleIf,
        ...General
      } = question;

      return {
        options: {
          General,
          Validators: validators,
          'Visible If': visibleIf,
        },
        type: modal,
        selected: id,
      }
    }

    return {
      options,
      type: modal,
      selected: id,
    };
  }
);
