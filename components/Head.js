import HeadNext from "next/head";

const Head = ({ title = "Restaurant Next" }) => (
  <HeadNext>
    <title>{title}</title>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Yeseva+One&amp;display=swap"
      rel="stylesheet"
    />
    <link rel="icon" href="/favicon/favicon.ico" />
  </HeadNext>
);

export default Head;
