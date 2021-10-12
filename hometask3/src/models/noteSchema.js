const yup = require("yup");

module.exports.createSchema = () => {
  return yup.object().shape({
    id: yup.number().default(() => Math.random()*1000),
    name: yup.string().required(),
    created: yup
      .date()
      .default(() => new Date()),
    category: yup.string().required(),
    content: yup.string().required(),
    archived: yup.boolean().default(false),
  });
};
