# Grade Admin

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
