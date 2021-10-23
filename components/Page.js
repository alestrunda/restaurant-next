import Head from "./Head";

const Page = ({ children }) => (
  <div className="flex flex-col min-h-screen">
    <Head />
    {children}
  </div>
);

export default Page;
