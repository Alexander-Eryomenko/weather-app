export const ADD_ITEM_TO_WISH_LIST = 'ADD_ITEM_TO_WISH_LIST';
export const REMOVE_ITEM_FROM_WISH_LIST = 'REMOVE_ITEM_FROM_WISH_LIST';

export const addItemToWishList = (item) => {
  return {
    type: ADD_ITEM_TO_WISH_LIST,
    item
  };
};

export const removeItemFromWishList = (id) => {
  return {
    type: REMOVE_ITEM_FROM_WISH_LIST,
    id
  };
};

