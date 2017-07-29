export const getDataFromForm = (form) => {
  return Array.from(form.elements).reduce(
    (formData, element) => {
      const {name, type, value} = element;

      if (!name || type === 'button' || type === 'submit' || type === 'reset') {
        return formData
      };


      console.log(type, element.checked, name, value);

      if (type === 'checkbox') {
        formData[name] = element.checked;
      } else if (type !== 'radio' || (type === 'radio' && element.checked)) {
        formData[name] = value;
      } else if (type === 'radio' && !element.checked && formData[name] === undefined) {
        formData[name] = null;
      }

      return formData;
    },
    {}
  );
};
