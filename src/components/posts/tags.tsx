import { useMdxComponentsContext } from "@/context/mdx-context";

const Tags = () => {
  const tags = useMdxComponentsContext().tags;
  return (
    <>
      <h2>Tags</h2>
      <ol>
        {tags.map((tag, index) => (
          <li key={index}>{tag}</li>
        ))}
      </ol>
    </>
  );
};

export default Tags;
