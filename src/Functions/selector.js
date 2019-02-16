const globalVar = () => {
  //--------------- A

  const active = document.getElementsByClassName("active");
  const active_btn = document.getElementsByClassName("active-btn");

  //--------------- B

  const builderTag = document.getElementsByClassName("builderTag");

  const btn_TagElement = document.getElementById("btn-TagElement");

  let btn_TagElement_Tag = btn_TagElement.getElementsByClassName("tag");

  //--------------- C
  const container_Form = document.getElementById("container_Form");
  let container_Form_SidebarButton = container_Form.getElementsByClassName(
    "l_SidebarButton"
  );

  const container_Element = document.getElementById("container_Element");

  //--------------- E

  const element_builder_group = document.getElementById(
    "element_builder_group"
  );
  const elementGroup = document.getElementById("elementGroup");
  const elementToolGroup = document.getElementById("elementToolGroup");

  let element_builder_group__symbol_btn_2 = element_builder_group.getElementsByClassName(
    "symbol-btn_2"
  );

  let elementGroup__sB_Btn_Group = elementGroup.getElementsByClassName(
    "sB_Btn_Group"
  );

  let elementToolGroup__symbol_btn_3 = elementToolGroup.getElementsByClassName(
    "symbol-btn_3"
  );

  //--------------- H

  const headerToolBarContainer = document.getElementById(
    "headerToolBarContainer"
  );

  //--------------- L

  const left = document.getElementById("left");
  let left__sideBarGroup = left.getElementsByClassName("sideBarGroup");

  //--------------- P

  const properties_group = document.getElementById("properties_group");
  let properties_group__symbol_btn_Borderd = properties_group.getElementsByClassName(
    "symbol-btn-Borderd"
  );

  //--------------- R

  const rowsGroup = document.getElementById("rowsGroup");
  let rowsGroup__sB_Btn_Group = rowsGroup.getElementsByClassName(
    "sB_Btn_Group"
  );

  //--------------- S

  const start = document.getElementById("start");
  const symbol_btn_2 = document.getElementsByClassName("symbol-btn_2");
  const select_edit_group = document.getElementById("select_edit_group");
  let select_edit_group__symbol_btn_Borderd = select_edit_group.getElementsByClassName(
    "symbol-btn-Borderd"
  );

  //--------------- T

  const tagGroup = document.getElementById("tagGroup");
  const tag = document.getElementsByClassName("tag");
  let toolContainer = headerToolBarContainer.getElementsByClassName(
    "toolContainer"
  );
  let tagGroup_Tag = tagGroup.getElementsByClassName("tag");

  //--------------- W

  const wp_mode = document.getElementById("wp_mode");

  const wPtagGroup = document.getElementById("wPtagGroup");

  const wpContainer = document.getElementsByClassName("wpContainer");

  let wPtagGroup__btn_Wp_Mode = wPtagGroup.getElementsByClassName(
    "btn_Wp_Mode"
  );
  let wPtagGroup__builderTag = wPtagGroup.getElementsByClassName("builderTag");

  let wPtagGroup__wpContainer = wPtagGroup.getElementsByClassName(
    "wpContainer"
  );

  //----------------------------------------------------------------------------------------------
  return {
    //--------------- A
    a_1: active,
    a_2: active_btn,
    //--------------- B
    b_1: builderTag,
    b_2: btn_TagElement_Tag,

    //--------------- C
    c_1: container_Form_SidebarButton,
    c_2: container_Element,

    //--------------- E
    e_1: elementToolGroup,
    e_2: elementGroup__sB_Btn_Group,
    e_3: elementToolGroup__symbol_btn_3,
    e_4: element_builder_group__symbol_btn_2,

    //--------------- L

    l_1: left__sideBarGroup,

    //--------------- P

    p_1: properties_group__symbol_btn_Borderd,

    //--------------- R

    r_1: rowsGroup__sB_Btn_Group,

    //--------------- S

    s_1: start,
    s_2: select_edit_group__symbol_btn_Borderd,
    s_3: symbol_btn_2,

    //--------------- T

    t_1: tagGroup,
    t_2: tag,
    t_3: tagGroup_Tag,
    t_4: toolContainer,

    //--------------- W

    w_1: wp_mode,
    w_2: wpContainer,
    w_3: wPtagGroup__btn_Wp_Mode,
    w_4: wPtagGroup__builderTag,
    w_5: wPtagGroup__wpContainer
  };
};

export { globalVar };
