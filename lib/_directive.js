let originalValue = "";

const telescope = (el, { length }) => {
  return originalValue.length > length
    ? (el.innerHTML = originalValue.substring(0, length) + "...")
    : (el.innerHTML = originalValue);
};

export default (options) => {
  const mounted = (el, { value }, vnode) => {
    originalValue = el.innerHTML;
    telescope(el, value);
  };
  const updated = (el, { value }, vnode) => {
    telescope(el, value);
  };
  return { mounted, updated };
};
