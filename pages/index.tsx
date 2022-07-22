import Image from "next/image";
import styles from "../styles/Home.module.css";
import { Htag, Button, Paragraph, Tag } from "../components";

export default function Home(): JSX.Element {
  return (
    <>
      <Htag tag="h1">Привет</Htag>
      <Button arrow='right' appearance='primary'>Кнопка</Button>
      <Button arrow='down' appearance='ghost'>Кнопка</Button>
      <Paragraph size="big">hello</Paragraph>
      <Paragraph size="medium">bye</Paragraph>
      <Paragraph size="small">hello</Paragraph>
      <Tag href='hello.html' size="medium" color="red">Hello</Tag>
    </>
  )
}
