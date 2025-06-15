import _ from 'lodash';

export const checkIsEmpty = data => {
  return _.isEmpty(data);
};
export const Domain = process.env.REACT_APP_DOMAIN;
