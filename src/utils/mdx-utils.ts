import matter from "gray-matter";
import { join } from "path";
import fs from "fs";

type Items = {
  [key: string]: string;
};

type Post = {
  data: {
    [key: string]: string;
  };
  content: string;
};

const POSTS_PATH = join(process.cwd(), "assets/posts");

function getPostsFilePaths(): string[] {
  return fs.readdirSync(POSTS_PATH).filter((path) => /\.md?$/.test(path));
}
export function getPost(slug: string): Post {
  const fullPath = join(POSTS_PATH, `${slug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf-8");
  const { data, content } = matter(fileContents);
  return { data, content };
}

export function getPostItems(filePath: string, fields: string[] = []): Items {
  const slug = filePath.replace(/\.md?$/, "");
  const { data, content } = getPost(slug);
  // const date = fs.statSync(path).ctime;

  const items: Items = {};

  fields.forEach((field) => {
    if (field === "slug") {
      items[field] = slug;
    }
    if (field === "content") {
      items[field] = content;
    }

    // if (field === "date") {
    //   items[field] = date.toLocaleString();
    // }

    if (field === "date") {
      items[field] = "2023-03-25";
    }

    if (data[field]) {
      items[field] = data[field];
    }
  });
  return items;
}

export function getAllPosts(fields: string[]): Items[] {
  const filePaths = getPostsFilePaths();
  const posts = filePaths
    .map((filePath) => getPostItems(filePath, fields))
    .sort((post1, post2) => (post1.date > post2.date ? 1 : -1));
  return posts;
}
