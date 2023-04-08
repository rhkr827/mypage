import { useMdxComponentsContext } from "@/context/mdx-context";

const Categories = () => {
  const categories = useMdxComponentsContext().categories;
  return (
    <>
      <h2>{categories[0]}</h2>
    </>
  );
};

export default Categories;
