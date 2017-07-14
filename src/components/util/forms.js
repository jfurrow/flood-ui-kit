export const getDataFromForm = (form) => {
  return Array.from(form.elements).reduce(
    (formData, element) => {
      const {name, type, value} = element;

      if (type === 'checkbox') {
        formData[name] = element.checked;
      } else {
        formData[name] = value;
      }

      return formData;
    },
    {}
  );
};
