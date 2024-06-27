const debounce = (fn: () => void, ms = 500) => {
  let timer: any;
  return function () {
    clearTimeout(timer);
    timer = setTimeout(() => fn(), ms);
  };
};

export default debounce;
