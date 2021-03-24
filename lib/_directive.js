const telescope = (el, { length }) => {
  if (el.innerHTML.length > 0) {
    return el.innerHTML.length > length
      ? (el.innerHTML = el.innerHTML.substring(0, length) + "...")
      : el.innerHTML;
  }
  return el.innerHTML;
};

export default (options) => {
  const beforeMount = (el, { value }, vnode) => {
    return telescope(el, value);
  };
  return { beforeMount };
};
