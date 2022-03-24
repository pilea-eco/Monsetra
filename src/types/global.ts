export class DataFrame {
  columns: string[];
  data: { [key: string]: number | string }[];

  constructor(columns: string[], data: { [key: string]: number | string }[]) {
    this.columns = columns;
    this.data = data;
  }
}

export type InformativeContext = {
  show: () => void,
  hide: () => void,
}

export enum TextFieldType {
  email = "email",
  password = "password",
  text = "text",
  number = "number",
  tel = "tel",
  url = "url",
}

export type TextFieldContext = {
  value: () => string,
  validate: () => void,
  setError: (message: string) => void,
}

export type DropdownItem = {
  label: string,
  value: string,
}

export enum DropdownAlignment {
  left = "ltr",
  right = "rtl"
}