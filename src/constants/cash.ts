import {ListType} from '@/types/cash';

export const CASH_PAGE:Record<string,number> ={
  Detail:0,
  Total:1,
  Setting:2,
}

export const CASH_TYPE:Record<string,ListType> ={
  income:{
    text:"入账",
    value:2
  },
  pay:{
    text:"支出",
    value:1
  },
  notincluded:{
    text:"不计入收支",
    value:3
  }
}

