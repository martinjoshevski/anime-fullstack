/* eslint-disable @next/next/no-page-custom-font */
import Head from "next/head";
import "bootstrap/dist/css/bootstrap.min.css";
import NavigationBar from "../components/Navbar/NavigationBar";
import Banner from "../components/Banner/Banner";
import AnimeAPI from "../components/AnimeAPI/AnimeAPI";
import { Container } from "reactstrap";
export default function Home() {
  return (
    <div>
      <style jsx global>{`
        body {
          margin: 0px;
          padding: 0px;
          font-family: "Bungee Inline", cursive;
          background-color: #000;
        }
      `}</style>
      <Head>
        <title>Books Library v1</title>
        <meta name="description" content="Books Library" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Bungee+Inline&display=swap"
          rel="stylesheet"
        />
      </Head>
      <NavigationBar />
      <Banner />
      <Container className="pt-4">
        <AnimeAPI />
      </Container>
    </div>
  );
}
