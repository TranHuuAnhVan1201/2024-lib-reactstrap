export interface buttonsType {
    toolTipText?: string;
    color?: string;
    tittle?: string;
    id?: string;
    size?: string;
    disabled?: boolean;
    active?: boolean;
    outline?: boolean;
    text?: string;
}
export let defaultButtonsData:buttonsType[] = [
    {
      toolTipText: "btn btn-primary",
      color: "primary",
      tittle: "Primary Button",
      id: "default1",
    },
    {
      toolTipText: "btn btn-secondary",
      color: "secondary",
      id: "default2",
      tittle: "Secondary Button",
    },
    {
      toolTipText: "btn btn-success",
      color: "success",
      id: "default3",
      tittle: "Success Button",
    },
    {
      toolTipText: "btn btn-info",
      color: "info",
      id: "default4",
      tittle: "Info Button",
    },
    {
      toolTipText: "btn btn-warning",
      id: "default5",
      color: "warning",
      tittle: "Warning Button",
    },
    {
      toolTipText: "btn btn-danger",
      id: "default6",
      color: "danger",
      tittle: "Danger Button",
    },
    {
      toolTipText: "btn btn-light",
      color: "light",
      id: "default7",
      tittle: "Light Button",
    },
  ];
  
  export let gradientButtonsData:buttonsType[] = [
    {
      toolTipText: "btn btn-primary-gradien",
      color: "primary-gradien",
      tittle: "Primary Button",
      id: "gradientButtons1",
    },
    {
      toolTipText: "btn btn-secondary-gradien",
      color: "secondary-gradien",
      id: "gradientButtons2",
      tittle: "Secondary Button",
    },
    {
      toolTipText: "btn btn-success-gradien",
      color: "success-gradien",
      id: "gradientButtons3",
      tittle: "Success Button",
    },
    {
      toolTipText: "btn btn-info-gradien",
      color: "info-gradien",
      id: "gradientButtons4",
      tittle: "Info Button",
    },
    {
      toolTipText: "btn btn-warning-gradien",
      id: "gradientButtons5",
      color: "warning-gradien",
      tittle: "Warning Button",
    },
    {
      toolTipText: "btn btn-danger-gradien",
      id: "gradientButtons6",
      color: "danger-gradien",
      tittle: "Danger Button",
    },
   
  ];
  
  export const largeButtonsData:buttonsType[] = [
    {
      toolTipText: "btn btn-primary btn-lg",
      id: "largeButton1",
      color: "primary",
      size: "sm",
      tittle: "Primary Button",
    },
    {
      toolTipText: "btn btn-secondary btn-lg",
      id: "largeButton2",
      color: "secondary",
      size: "sm",
      tittle: "Secondary Button",
    },
    {
      toolTipText: "btn btn-success btn-lg",
      id: "largeButton3",
      size: "lg",
      color: "success",
      tittle: "Success Button",
    },
    {
      toolTipText: "btn btn-info btn-lg",
      id: "largeButton4",
      color: "info",
      tittle: "Info Button",
      size: "lg",
    },
    {
      toolTipText: "btn btn-warning btn-lg",
      id: "largeButton5",
      color: "warning",
      size: "lg",
      tittle: "Warning Button",
    },
    {
      toolTipText: "btn btn-danger btn-lg",
      id: "largeButton6",
      size: "lg",
      color: "danger",
      tittle: "Danger Button",
    },
    {
      toolTipText: "btn btn-light btn-lg",
      id: "largeButton7",
      color: "light",
      size: "lg",
      tittle: "Light Button",
    },
  ];
  export const smallButtonsData:buttonsType[] = [
    {
      toolTipText: "btn btn-primary btn-sm",
      id: "smallButton1",
      color: "primary",
      size: "sm",
      tittle: "Primary Button",
    },
    {
      toolTipText: "btn btn-secondary btn-sm",
      id: "smallButton2",
      color: "secondary",
      size: "sm",
      tittle: "Secondary Button",
    },
    {
      toolTipText: "btn btn-success btn-sm",
      id: "smallButton3",
      size: "sm",
      color: "success",
      tittle: "Success Button",
    },
    {
      toolTipText: "btn btn-info btn-sm",
      id: "smallButton4",
      color: "info",
      tittle: "Info Button",
      size: "sm",
    },
    {
      toolTipText: "btn btn-warning btn-sm",
      id: "smallButton5",
      color: "warning",
      size: "sm",
      tittle: "Warning Button",
    },
    {
      toolTipText: "btn btn-danger btn-sm",
      id: "smallButton6",
      size: "sm",
      color: "danger",
      tittle: "Danger Button",
    },
    {
      toolTipText: "btn btn-light btn-sm",
      id: "smallButton7",
      color: "light",
      size: "sm",
      tittle: "Light Button",
    },
  ];
  
  export const extraSmallButtonsData:buttonsType[] = [
    {
      toolTipText: "btn btn-prime btn-xs",
      id: "extraSmallButton1",
      color: "primary",
      size: "xs",
      tittle: "Primary Button",
    },
    {
      toolTipText: "btn btn-secondary btn-xs",
      id: "extraSmallButton2",
      color: "secondary",
      size: "xs",
      tittle: "Secondary Button",
    },
    {
      toolTipText: "btn btn-success btn-xs",
      id: "extraSmallButton3",
      size: "xs",
      color: "success",
      tittle: "Success Button",
    },
    {
      toolTipText: "btn btn-info btn-xs",
      id: "extraSmallButton4",
      color: "info",
      tittle: "Info Button",
      size: "xs",
    },
    {
      toolTipText: "btn btn-warning btn-xs",
      id: "extraSmallButton5",
      color: "warning",
      size: "xs",
      tittle: "Warning Button",
    },
    {
      toolTipText: "btn btn-danger btn-xs",
      id: "extraSmallButton6",
      size: "xs",
      color: "danger",
      tittle: "Danger Button",
    },
    {
      toolTipText: "btn btn-light btn-xs",
      id: "extraSmallButton7",
      color: "light",
      size: "xs",
      tittle: "Light Button",
    },
  ];
  
  export let disabledButtonsData:buttonsType[] = [
    {
      toolTipText: "btn btn-primary disabled",
      disabled: true,
      color: "primary",
      tittle: "Disabled",
      id: "active1",
    },
    {
      toolTipText: "btn btn-secondary disabled",
      disabled: true,
      color: "secondary",
      id: "active2",
      tittle: "Disabled",
    },
    {
      toolTipText: "btn btn-success disabled",
      disabled: true,
      color: "success",
      id: "active3",
      tittle: "Disabled",
    },
    {
      toolTipText: "btn btn-info disabled",
      disabled: true,
      color: "info",
      id: "active4",
      tittle: "Disabled",
    },
    {
      toolTipText: "btn btn-warning disabled",
      disabled: true,
      id: "active4",
      color: "warning",
      tittle: "Disabled",
    },
    {
      toolTipText: "btn btn-danger disabled",
      disabled: true,
      id: "active5",
      color: "danger",
      tittle: "Disabled",
    },
    {
      toolTipText: "btn btn-light disabled",
      disabled: true,
      color: "light",
      id: "active6",
      tittle: "Disabled",
    },
  ];
  export let activeButtonsData:buttonsType[] = [
    {
      toolTipText: "btn btn-primary active",
      active: true,
      color: "primary",
      tittle: "Primary Button",
      id: "active1",
    },
    {
      toolTipText: "btn btn-secondary active",
      active: true,
      color: "secondary",
      id: "active2",
      tittle: "Secondary Button",
    },
    {
      toolTipText: "btn btn-success active",
      active: true,
      color: "success",
      id: "active3",
      tittle: "Success Button",
    },
    {
      toolTipText: "btn btn-info active",
      active: true,
      color: "info",
      id: "active4",
      tittle: "Info Button",
    },
    {
      toolTipText: "btn btn-warning active",
      active: true,
      id: "active4",
      color: "warning",
      tittle: "Warning Button",
    },
    {
      toolTipText: "btn btn-danger active",
      active: true,
      id: "active5",
      color: "danger",
      tittle: "Danger Button",
    },
    {
      toolTipText: "btn btn-light active",
      active: true,
      color: "light",
      id: "active6",
      tittle: "Light Button",
    },
  ];
  
  export let outlineButtonsData:buttonsType[] = [
    {
      toolTipText: "btn btn-outline-primary",
      outline: true,
      color: "primary",
      tittle: "Primary Button",
      id: "outLine1",
    },
    {
      toolTipText: "btn outline-btn-secondary",
      outline: true,
      color: "secondary",
      id: "outLine2",
      tittle: "Secondary Button",
    },
    {
      toolTipText: "btn btn-outline-success",
      outline: true,
      color: "success",
      id: "outLine3",
      tittle: "Success Button",
    },
    {
      toolTipText: "btn btn-outline-info",
      outline: true,
      color: "info",
      id: "outLine4",
      tittle: "Info Button",
    },
    {
      toolTipText: "btn btn-outline-warning",
      outline: true,
      id: "outLine5",
      color: "warning",
      tittle: "Warning Button",
    },
    {
      toolTipText: "btn btn-outline-danger",
      outline: true,
      id: "outLine6",
      color: "danger",
      tittle: "Danger Button",
    },
    {
      toolTipText: "btn btn-outline-light",
      outline: true,
      color: "light",
      id: "outLine7",
      tittle: "Light Button",
    },
  ];
  export let boldBorderOutlineButtonsData:buttonsType[] = [
    {
      toolTipText: "btn btn-outline-primary-2x",
      outline: true,
      color: "primary-2x",
      tittle: "Primary Button",
      id: "boldBorderOutLine1",
    },
    {
      toolTipText: "btn outline-btn-secondary-2x",
      outline: true,
      color: "secondary-2x",
      id: "boldBorderOutLine2",
      tittle: "Secondary Button",
    },
    {
      toolTipText: "btn btn-outline-success-2x",
      outline: true,
      color: "success",
      id: "boldBorderOutLine3",
      tittle: "Success Button",
    },
    {
      toolTipText: "btn btn-outline-info-2x",
      outline: true,
      color: "info",
      id: "boldBorderOutLine4",
      tittle: "Info Button",
    },
    {
      toolTipText: "btn btn-outline-warning-2x",
      outline: true,
      id: "boldBorderOutLine5",
      color: "warning",
      tittle: "Warning Button",
    },
    {
      toolTipText: "btn btn-outline-danger-2x",
      outline: true,
      id: "boldBorderOutLine6",
      color: "danger",
      tittle: "Danger Button",
    },
    {
      toolTipText: "btn btn-outline-light-2x",
      outline: true,
      color: "light",
      id: "boldBorderOutLine7",
      tittle: "Light Button",
    },
  ];
  
  export let outlineDisabledButtonsData:buttonsType[] = [
    {
      toolTipText: "btn btn-outline-primary",
      outline: true,
      color: "primary",
      tittle: "Disabled",
      id: "outLineDisabled1",
      disabled:true,
    },
    {
      toolTipText: "btn outline-btn-secondary",
      outline: true,
      color: "secondary",
      id: "outLineDisabled2",
      disabled:true,
      tittle: "Secondary Button",
    },
    {
      toolTipText: "btn btn-outline-success",
      outline: true,
      color: "success",
      id: "outLineDisabled3",
      disabled:true,
      tittle: "Disabled",
    },
    {
      toolTipText: "btn btn-outline-info",
      outline: true,
      color: "info",
      id: "outLineDisabled4",
      disabled:true,
      tittle: "Disabled",
    },
    {
      toolTipText: "btn btn-outline-warning",
      outline: true,
      id: "outLineDisabled5",
      disabled:true,
      color: "warning",
      tittle: "Disabled",
    },
    {
      toolTipText: "btn btn-outline-danger",
      outline: true,
      id: "outLineDisabled6",
      disabled:true,
      color: "danger",
      tittle: "Disabled",
    },
    {
      toolTipText: "btn btn-outline-light",
      outline: true,
      color: "light",
      id: "outLineDisabled7",
      disabled:true,
      tittle: "Disabled",
    },
  ];
  export let outlineLargeButtonsData:buttonsType[] = [
    {
      toolTipText: "btn btn-outline-primary btn-large",
      size: "lg",
      outline: true,
      color: "primary",
      tittle: "Primary Button",
      id: "outLineLarge1",
    },
    {
      toolTipText: "btn btn-outline-secondary btn-large",
      size: "lg",
      outline: true,
      color: "secondary",
      id: "outLineLarge2",
      tittle: "Secondary Button",
    },
    {
      toolTipText: "btn btn-outline-success btn-large",
      size: "lg",
      outline: true,
      color: "success",
      id: "outLineLarge3",
      tittle: "Success Button",
    },
    {
      toolTipText: "btn btn-outline-info btn-large",
      size: "lg",
      outline: true,
      color: "info",
      id: "outLineLarge4",
      tittle: "Info Button",
    },
    {
      toolTipText: "btn btn-outline-warning btn-large",
      size: "lg",
      outline: true,
      id: "outLineLarge5",
      color: "warning",
      tittle: "Warning Button",
    },
    {
      toolTipText: "btn btn-outline-danger btn-large",
      size: "lg",
      outline: true,
      id: "outLineLarge6",
      color: "danger",
      tittle: "Danger Button",
    },
    {
      toolTipText: "btn btn-outline-light btn-large",
      size: "lg",
      outline: true,
      color: "light",
      id: "outLineLarge7",
      tittle: "Light Button",
    },
  ];
  
  export let outlineSmallButtonsData:buttonsType[] = [
    {
      toolTipText: "btn btn-outline-primary btn-sm",
      size: "sm",
      outline: true,
      color: "primary",
      tittle: "Primary Button",
      id: "outLineSmall1",
    },
    {
      toolTipText: "btn btn-outline-secondary btn-sm",
      size: "sm",
      outline: true,
      color: "secondary",
      id: "outLineSmall2",
      tittle: "Secondary Button",
    },
    {
      toolTipText: "btn btn-outline-success btn-sm",
      size: "sm",
      outline: true,
      color: "success",
      id: "outLineSmall3",
      tittle: "Success Button",
    },
    {
      toolTipText: "btn btn-outline-info btn-sm",
      size: "sm",
      outline: true,
      color: "info",
      id: "outLineSmall4",
      tittle: "Info Button",
    },
    {
      toolTipText: "btn btn-outline-warning btn-sm",
      size: "sm",
      outline: true,
      id: "outLineSmall5",
      color: "warning",
      tittle: "Warning Button",
    },
    {
      toolTipText: "btn btn-outline-danger btn-sm",
      size: "sm",
      outline: true,
      id: "outLineSmall6",
      color: "danger",
      tittle: "Danger Button",
    },
    {
      toolTipText: "btn btn-outline-light btn-sm",
      size: "sm",
      outline: true,
      color: "light",
      id: "outLineSmall7",
      tittle: "Light Button",
    },
  ];
  export let outlineExtraSmallButtonsData:buttonsType[] = [
    {
      toolTipText: "btn btn-outline-primary btn-xs",
      size: "xs",
      outline: true,
      color: "primary",
      tittle: "Primary Button",
      id: "outLineExtraSmall1",
    },
    {
      toolTipText: "btn btn-outline-secondary btn-xs",
      size: "xs",
      outline: true,
      color: "secondary",
      id: "outLineExtraSmall2",
      tittle: "Secondary Button",
    },
    {
      toolTipText: "btn btn-outline-success btn-xs",
      size: "xs",
      outline: true,
      color: "success",
      id: "outLineExtraSmall3",
      tittle: "Success Button",
    },
    {
      toolTipText: "btn btn-outline-info btn-xs",
      size: "xs",
      outline: true,
      color: "info",
      id: "outLineExtraSmall4",
      tittle: "Info Button",
    },
    {
      toolTipText: "btn btn-outline-warning btn-xs",
      size: "xs",
      outline: true,
      id: "outLineExtraSmall5",
      color: "warning",
      tittle: "Warning Button",
    },
    {
      toolTipText: "btn btn-outline-danger btn-xs",
      size: "xs",
      outline: true,
      id: "outLineExtraSmall6",
      color: "danger",
      tittle: "Danger Button",
    },
    {
      toolTipText: "btn btn-outline-light btn-xs",
      size: "xs",
      outline: true,
      color: "light",
      id: "outLineExtraSmall7",
      tittle: "Light Button",
    },
  ];
  
  export const defaultButtonsHeadingData:buttonsType[] = [
    {
      text: "Bootstrap state buttons",
    },
  ];
  