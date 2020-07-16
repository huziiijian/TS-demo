const rec = (setPublic = {}) => (obj = {}) => {
  window.rprm.rec({
    ...setPublic,
    ...obj
  });
};
export default rec;
