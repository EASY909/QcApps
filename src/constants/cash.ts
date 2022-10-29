import { ListType } from '@/types/cash';

export const CASH_PAGE: Record<string, number> = {
  Detail: 0,
  Total: 1,
  Setting: 2,
}

export const CASH_TYPE: Record<string, ListType> = {
  income: {
    text: "入账",
    value: 2
  },
  pay: {
    text: "支出",
    value: 1
  },
  notincluded: {
    text: "不计入收支",
    value: 3
  }
}

export const COLOR = {
  green: {
    type: "button-green",
    value:"#3db778"
  },
  yellow:{
    type: "button-yellow",
    value:"#f1b53b"
  },
  blue:{
    type: "button-blue",
    value:"#7987aa"
  }
}