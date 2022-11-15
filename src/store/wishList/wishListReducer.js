import {
  ADD_ITEM_TO_WISH_LIST,
  REMOVE_ITEM_FROM_WISH_LIST
} from './actions';

const initialData = {
  dataWishList: [],
  isAdded: {}
};

export const wishListReducer = (state = initialData, action) => {
  switch (action.type) {
    case ADD_ITEM_TO_WISH_LIST:
      return {
        ...state,
        dataWishList: [...state.dataWishList, action.item],
        isAdded: {...state.isAdded, [action.item.id]: true}
      };
  case REMOVE_ITEM_FROM_WISH_LIST:
    return {
      ...state,
      dataWishList: [...state.dataWishList].filter(item => {
        return item.id !== action.id;
      }),
      isAdded: {...state.isAdded, [action.id]: false}
    };
  default:
    return state;
  }
};
