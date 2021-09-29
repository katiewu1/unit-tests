export const isEmpty = (stringArrayOrObject) => {
  const type = typeof stringArrayOrObject;

  if (type === 'string') {
    return stringArrayOrObject === '';
  } else if (type === 'object') {
    // check if the object is an Array
    if (stringArrayOrObject.constructor === Array) {
      return stringArrayOrObject.length === 0;
    } else {
      // convert object to an Array and then check it's length
      return Object.keys(stringArrayOrObject).length === 0;
    }
  }
};
