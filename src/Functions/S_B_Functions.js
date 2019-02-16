import React from "react";
import { globalVar } from "./selector";

//================================== Starter ============================================

/* Onclick function call for Btn (New) at the (Form Toolbar container)
1- hide the (Start)-Div, which cover the (Head toolbar containers)
2- Show the Tag Grop Btns (Form, Element, Style) at the Header
3- set Toggle Style to the Head Tag Buttons (Form, Element, Style)
4- active Form Toolbar " Same functin of clicked (Form Tag Button)"

"this will be changed to the Pop-Up later"
*/

const btnNew = () => {
  let gV = globalVar();
  // gV.s_1.style.display = "none";
  // gV.t_1.style.display = "inline-block";
  formToolBar();
  for (let i = 0; i < gV.t_2.length; i++) {
    gV.t_2[i].addEventListener("click", function() {
      gV.a_1[0].className = gV.a_1[0].className.replace(" active", "");
      this.className += " active";
      //----------------------------------------Form Tag----------------------------------

      if (gV.t_2[0].classList.contains("active")) {
        bodyToolBar(0);

        //----------------------------------------Element Tag----------------------------------

        /* for Onclick on (Elemet Tag Button)
        1- Call (Toggel function) to show (Element Toolbar container) and hide other (Containers)
        at the (Head Toolbar Container)
        2- display the (Rows Btn-Group) at the (Left Sidebar)
        3- set Toggelstyle to the (Element Toolbar Buttens) at the (Head Toolbar Container)
        */
      } else if (gV.t_2[1].classList.contains("active")) {
        bodyToolBar(1);

        //----------------------------------------Style Tag----------------------------------

        /* for Onclick on (Style Tag Button)
        1- Call (Toggel function) to show (Style Toolbar container) and hide other (Containers)
        at the (Head Toolbar Container)
        2- display the (Style Btn-Group) at the (Left Sidebar)
        */
      } else {
        bodyToolBar(2);
      }
    });
  }
};

//==================================== Header =====================================
/* 
1- (Toggel function) to show and Hide (Head Toolbar containers)
 depending on clicked Header Tagbuttons at the (Head Toolbar Container)
*/

const bodyToolBar = n => {
  let gV = globalVar();

  for (let i = 0; i < gV.t_4.length; i++) {
    if (gV.t_3[n].classList.contains("active")) {
      gV.t_3[0].style.zIndex = "2"; // return z-index of Form Header tags to 2
      gV.t_3[1].style.zIndex = "1"; // return z-index of Element Header tags to 1
      gV.t_3[2].style.zIndex = "0"; // return z-index of Style Header tags to 0

      gV.t_3[n].style.zIndex = "4"; // set current z-index of selected Header tags to 4
      gV.t_4[i].style.display = "none"; // hide all tool bar container of the header Tags
      gV.t_4[n].style.display = "inline-block"; // show relevant Tool bar container of selected Tag
    }
  }
};

//----------------------------------------Form Tag----------------------------------

/* for Onclick on (Form Tag Button)
  1- Call (Toggel function) to show (Form Toolbar container) and hide other (Containers)
   at the (Head Toolbar Container)
  2- set Toggelstyle to the (Select-edit, Properties and Element Builder Btn-Group) 
  at the (Head Toolbar Container)
  */
const formToolBar = () => {
  bodyToolBar(0);
  let gV = globalVar();

  for (let i = 0; i < gV.s_2.length; i++) {
    gV.s_2[i].addEventListener("click", toggleActiveBtn);
  }

  for (let i = 0; i < gV.p_1.length; i++) {
    gV.p_1[i].addEventListener("click", selectActiveBtn);
  }

  for (let i = 0; i < gV.s_3.length; i++) {
    gV.s_3[i].addEventListener("click", selectActiveBtn);
  }
};

// toogle Function for Select/edit tool Group
function toggleActiveBtn() {
  let gV = globalVar();

  gV.a_2[0].className = gV.a_2[0].className.replace(" active-btn", "");
  this.className += " active-btn";
}

// select Function for property Tool group
function selectActiveBtn() {
  if (this.classList.contains("active-btn")) {
    this.classList.remove("active-btn");
  } else {
    this.classList.add("active-btn");
  }
}

//====================================== Body ==========================================

//====================================== Header Tool Container =========================

//----------------------------------------Form Tool Bar ----------------------------------

//---------------------Element Builder Group

/* Button (Form) and (Tag Form), Toggle Active,
 set relevant to Workplace Mode, 
 Set relevant Left Side Bar content  
  */

const btn_Form = () => {
  btn_toggle(0);
  toggleWpContainer();
  lSB_toggle(0);
};
/* Button (Paper) and (Tag Paper), Toggle Active,
     set relevant to Workplace Mode, 
     Set relevant Left Side Bar content  
      */

const btn_Paper = () => {
  btn_toggle(1);
  toggleWpContainer();
  lSB_toggle(1);
};

/* Button (Popup) and (Tag Popup), Toggle Active,
     set relevant to Workplace Mode, 
     Set relevant Left Side Bar content  
      */

const btn_Popup = () => {
  btn_toggle(2);
  toggleWpContainer();
};

/* Button (Filter) and (Tag Filter), Toggle Active,
     set relevant to Workplace Mode, 
     Set relevant Left Side Bar content  
      */

const btn_Filter = () => {
  btn_toggle(3);
  toggleWpContainer();
};

// toggle Function for show and hide the relevant Workplace and relevant Tag
const btn_toggle = i => {
  let gV = globalVar();

  if (gV.e_4[i].classList.contains("active-btn")) {
    for (let k = 0; k < gV.b_1.length; k++) {
      gV.b_1[k].classList.remove("active");
      gV.w_2[k].classList.remove("active");
    }

    gV.b_1[i].classList.add("active");
    gV.w_2[i].classList.add("active");
    gV.b_1[i].style.display = gV.w_2[i].style.display = gV.w_1.style.display =
      "inline-block";
  } else {
    gV.b_1[i].style.display = gV.w_2[i].style.display = "none";
  }
};

//----------------------------------------Element Tool Bar ----------------------------------

/* Onclick for Btn (Rows, Element, Library, Property, Condition) 
    1- toggle display for (relevant Btns) at the (Left Sidebar container) 
    and hide (irrilivant Btns)
    */

const btn_Rows = () => {
  btnGroup(0);
};

const btn_Element = () => {
  btnGroup(1);
};

const btn_Library = () => {
  btnGroup(2);
};

const btn_Property = () => {
  btnGroup(3);
};

const btn_Condition = () => {
  btnGroup(4);
};

const btnGroup = i => {
  let gV = globalVar();

  for (let k = 0; k < gV.l_1.length; k++) {
    gV.l_1[k].style.display = "none";
  }
  const d = gV.l_1[i].getElementsByClassName("sB_Btn_Group");

  for (let j = 0; j < gV.e_3.length; j++) {
    if (gV.e_3[j].classList.contains("active-btn")) {
      gV.e_3[j].classList.remove("active-btn");
    }
    gV.e_3[i].classList.add("active-btn");
  }
  if (gV.e_3[i].classList.contains("active-btn")) {
    gV.l_1[i].style.display = "inline-block";
    if (gV.b_1[0].classList.contains("active")) {
      d[0].style.display = "inline-block";
    } else if (gV.b_1[1].classList.contains("active")) {
      d[1].style.display = "inline-block";
    } else if (gV.b_1[2].classList.contains("active")) {
      d[0].style.display = "inline-block";
    } else if (gV.b_1[3].classList.contains("active")) {
      d[0].style.display = "inline-block";
    }
  }
};

//---------------------------------------Body Work place ----------------------------------------

// Workplace Button Toggle Workplace Mode (Fullsize, Splitted Mode)

const modeFullSize = () => {
  toggleWpMode(0);
  toggleWpContainer();
};

const modeSplited = () => {
  toggleWpMode(1);
  toggleWpContainer();
};

const toggleWpMode = g => {
  let gV = globalVar();

  for (let i = 0; i < gV.w_3.length; i++) {
    gV.w_3[i].classList.remove("wp_active");
    gV.w_3[g].classList.add("wp_active");
  }
};

// Workplace Container and Tag Toggle Workplace Mode (Fullsize, Splitted Mode)

const toggleWpContainer = () => {
  let gV = globalVar();

  if (gV.w_3[1].classList.contains("wp_active")) {
    for (let i = 0; i < gV.w_4.length; i++) {
      gV.w_4[i].style.left = gV.w_5[i].style.left = "51%";
      gV.w_4[i].style.right = gV.w_5[i].style.right = "0rem";
      gV.w_4[i].style.position = "absolute";

      if (gV.e_4[0].classList.contains("active-btn")) {
        gV.w_4[0].style.left = gV.w_5[0].style.left = "0rem";
        gV.w_4[0].style.right = gV.w_5[0].style.right = "51%";
        gV.w_4[0].style.position = "relative";
      } else if (gV.e_4[1].classList.contains("active-btn")) {
        gV.w_4[1].style.left = gV.w_5[1].style.left = "0rem";
        gV.w_4[1].style.right = gV.w_5[1].style.right = "51%";
        gV.w_4[1].style.position = "relative";
      } else if (gV.e_4[2].classList.contains("active-btn")) {
        gV.w_4[2].style.left = gV.w_5[2].style.left = "0rem";
        gV.w_4[2].style.right = gV.w_5[2].style.right = "51%";
        gV.w_4[2].style.position = "relative";
      } else {
        gV.w_4[3].style.left = gV.w_5[3].style.left = "0rem";
        gV.w_4[3].style.right = gV.w_5[3].style.right = "51%";
        gV.w_4[3].style.position = "relative";
      }
    }
  } else {
    for (let i = 0; i < gV.w_4.length; i++) {
      gV.w_4[i].style.left = gV.w_5[i].style.left = "0rem";
      gV.w_4[i].style.right = gV.w_5[i].style.right = "0rem";
      gV.w_4[i].style.position = "relative";
    }
  }
};

//====================================== Left Side Bar ==================================

/* toggle Function for Left side Bar button Groups
   depend on active Button at the Element Builder */

const lSB_toggle = n => {
  let gV = globalVar();

  for (let i = 0; i < gV.r_1.length; i++) {
    if (gV.b_1[n].classList.contains("active")) {
      gV.r_1[i].style.display = gV.e_2[i].style.display = "none";

      if (gV.e_3[0].classList.contains("active-btn")) {
        gV.r_1[n].style.display = "inline-block";
      } else if (gV.e_3[1].classList.contains("active-btn")) {
        gV.e_2[n].style.display = "inline-block";
      }
    }
  }
};

//================================================ Global Element ====================================
// constract Button for Left Side Bar
const lS_Btn = (a, b, c, d) => {
  const btn = {
    id: a,
    content_1: b,
    content_2: c,
    onclick: d
  };
  return (
    <button id={btn.id} className="l_SidebarButton" onClick={btn.onclick}>
      <span className="symbol-btn_4">{btn.content_1}</span>
      <span className="btn-Text">{btn.content_2}</span>
    </button>
  );
};

// constract Button for Element tool Bar
const hTB_Btn = (a, b, c, d, e) => {
  const btn = {
    id: a,
    className: b,
    content_1: c,
    content_2: d,
    onClick: [btn_Rows, btn_Element, btn_Library, btn_Property, btn_Condition]
  };
  return (
    <button id={btn.id} className={btn.className} onClick={btn.onClick[e]}>
      <span className="titleText">{btn.content_1}</span>
      <span className="titleSymbol">{btn.content_2}</span>
    </button>
  );
};

// constract Global Button

const Gl_Btn = (a, b, c, d) => {
  const btn = {
    id: a,
    className: b,
    content: c,
    onclick: [
      btn_Form,
      btn_Paper,
      btn_Popup,
      btn_Filter,
      modeFullSize,
      modeSplited
    ]
  };
  return (
    <button id={btn.id} className={btn.className} onClick={btn.onclick[d]}>
      {btn.content}
    </button>
  );
};

//---------------------------------------------------

/*
const container_WB = () => {
  const btn = {
    id: "",
    className: "containerTag",
    titel: "Titel"
  };
  return (
    <div id="wb_Container_holder">
      <label
        htmlFor="titel"
        contentEditable
        id={btn.id}
        className={btn.className}
      >
        {btn.titel}
      </label>
      <form className="wp_Element_Container" />
    </div>
  );
};
*/

//---------------------------------------------- Reducer -----------------------------------------
const mapStateToProps = state => {
  return {
    form: state.componentsReducer.form
  };
};

function mergeProps(stateProps, dispatchProps, ownProps) {
  const { dispatch } = dispatchProps;
  const components_reducer = require("../reducers/components_reducer");

  return {
    ...ownProps,
    ...stateProps,
    addNewObject: key => {
      components_reducer.actions._addNewObject(dispatch, key);
    }
  };
}

export { lS_Btn, btnNew, hTB_Btn, Gl_Btn, mapStateToProps, mergeProps };
