# Survey Builder

### ToDo
- Write stories for all components

## State Shape

```
{
  pages: [1, 2]
  entities: {
    pages: {
      1: {
        name: ,
        navigationButtonsVisibility: ,
        title: ,
        visibleIf: ,
        questions: [3, 4]
      }
    },
    questions: {
      3: {
        types: ,
        choices: [5, 6],
        validators: [7, 8],
      }
    },
    choices: {
      5: {
        value: ,
        text:
      }
    },
    validators: {
      7: {
        ...
      }
    },
    triggers: {
      9: {
        ...
      }
    }
    ...
  },
  options: {
    surveyLevel: {
      onlyone : {
      clearInvisibleValues: true,
      completeText: "completeText",
      completedHtml: "completeHTML",
      cookieName: "cookieName",
      focusFirstQuestionAutomatic: false,
      goNextPageAutomatic: true,
      locale: "fr",
      mode: "display",
      pageNextText: "pageNextText",
      pagePrevText: "PagePrevText",
      questionStartIndex: "quentionStati",
      questionTitleLocation: "bottom",
      questionTitleTemplate: "sfafs",
      requiredText: "*sdf",
      sendResultOnPageNext: true,
      showNavigationButtons: false,
      showPageNumbers: true,
      showPageTitles: false,
      showProgressBar: "top",
      showQuestionNumbers: "onPage",
      showTitle: false,
      storeOthersAsComment: false,
      surveyId: "sdfas",
      surveyPostId: "sdfas",
      title: "sdfasdf",
      }
    },
    pageLeve: {
      pageId: {
       name: "PageLevel",
       navigationButtonsVisibility: "show",
       title: "pageTitiel",
       visibleIf: "visibleIfLogic",
      }
    },
    questionLevel: {
      questionId: {

      }
    }
  }
  UI: {
    modal: {
      isOpen:  PropTypes.bool,
      // boolean to control the state of the popover
      toggle:  PropTypes.func,
      // callback for toggling isOpen in the controlling component
      size: PropTypes.string,
      // control backdrop, see http://v4-alpha.getbootstrap.com/components/modal/#options
      backdrop: PropTypes.oneOfType([
        PropTypes.bool,
        PropTypes.oneOf(['static'])
      ]),
      keyboard: PropTypes.bool,
      // zIndex defaults to 1000.
      zIndex: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.string,
      ]),
      className: PropTypes.string,
      wrapClassName: PropTypes.string,
      modalClassName: PropTypes.string,
      backdropClassName: PropTypes.string,
      contentClassName: PropTypes.string,
    },
    workArea: {

    },
    surveyTabs: {
      selectedTab: number
    }
  }
}
```
### Type of Survey
- Single Input
- Radio Group
- Dropdown
- Checkboxes
- Rating
- Comment


### Todo
- Show buttons css
