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
          font-family: "", cursive;
          background-color: #000;
        }
      `}</style>
      <Head>
        <title>Welcome to AnimeWorld</title>
        <meta name="description" content="Books Library" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
      </Head>
      <NavigationBar />
      <Banner />
      <Container className="pt-4">
        <AnimeAPI />
      </Container>
    </div>
  );
}
