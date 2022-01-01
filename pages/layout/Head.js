import HeadNext from "next/head";
import { SITE_NAME } from "../../config";

const Head = ({ title, useEdamam = false }) => (
  <HeadNext>
    <title>{title ? `${title} | ${SITE_NAME}` : SITE_NAME}</title>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link
      rel="preconnect"
      href="https://fonts.gstatic.com"
      crossOrigin="true"
    />
    <link
      href="https://fonts.googleapis.com/css2?family=Yeseva+One&amp;display=swap"
      rel="stylesheet"
    />
    <link rel="icon" href="/favicon/favicon.ico" />
    {useEdamam && (
      <script src="https://developer.edamam.com/attribution/badge.js"></script>
    )}
  </HeadNext>
);

export default Head;
