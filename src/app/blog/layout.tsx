import NavbarBlog from "@/components/blog/NavbarBlog";

const BlogLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <NavbarBlog />
      {children}
    </>
  );
};

export default BlogLayout;
