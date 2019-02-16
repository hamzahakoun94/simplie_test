const TYPES = {
  Add_Form_Elemen: "container",
  Remove_Form_Element: "Remove_Form_Element"
};

const intialState = {
  form: [],
  componentCounter: 0
};

export const actions = {
  _addNewObject: (dispatch, key) =>
    dispatch({
      type: TYPES.Add_Form_Elemen,
      data: key
    })
};

export const reducer = (state = intialState, action) => {
  let newJson;
  switch (action.type) {
    case TYPES.Add_Form_Elemen:
      if (action.data === "container") {
        let index = state.componentCounter; //0
        let key = "component" + index; //component0
        newJson = state.form;
        newJson[key] = {};
        newJson[key].tagName = "container";

        return {
          ...state,
          form: newJson,
          componentCounter: index + 1
        };
      } else {
        return {
          ...state
        };
      }
    case TYPES.Remove_Form_Element:
      return {
        ...state,
        form: state.form.filter(form => form.id !== action.formId)
      };
    default:
      return state;
  }
};
