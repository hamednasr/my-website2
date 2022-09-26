export default {
  name: "education",
  title: "Education",
  type: "document",
  fields: [
    {
      name: "degree",
      title: "Degree",
      type: "string",
    },
    {
      name: "university",
      title: "University",
      type: "array",
      of: [{ type: "courses" }],
    },
  ],
};
