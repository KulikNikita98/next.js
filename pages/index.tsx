import Image from "next/image";
import styles from "../styles/Home.module.css";
import { Htag, Button } from "../components";

export default function Home(): JSX.Element {
  return (
    <>
      <Htag tag="h1">Привет</Htag>
      <Button appearance='primary'>Кнопка</Button>
      <Button appearance='ghost'>Кнопка</Button>
    </>
  )
}
