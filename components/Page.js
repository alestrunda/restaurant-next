import Head from "./Head";

const Page = ({ children }) => (
  <div className="flex flex-col justify-center min-h-screen">
    <Head />
    {children}
  </div>
);

export default Page;
