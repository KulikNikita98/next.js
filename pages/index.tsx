import { GetStaticProps } from 'next';
import React, {useState} from 'react';
import { Htag, Button, Paragraph, Tag, Rating } from "../components";
import { withLayout } from '../layout/Layout';
import axios from 'axios';
import { MenuItem } from '../interfaces/menu.interface';

function Home({menu}: HomeProps): JSX.Element {
  const [rating, setRating] = useState<number>(4);

  return (
    <>
      <Htag tag="h1">Привет</Htag>
      <Button arrow='right' appearance='primary'>Инкремент</Button>
      <Button arrow='down' appearance='ghost' >Декремент</Button>
      <Paragraph size="big">hello</Paragraph>
      <Paragraph size="medium">bye</Paragraph>
      <Paragraph size="small">hello</Paragraph>
      <Tag size="medium" color="red">Hello</Tag>
      <Rating isEditable={true} setRating={setRating} rating={rating}></Rating>
      <ul>
        {menu.map((item) => (<li key={item._id.secondCategory}> {item._id.secondCategory} </li>))}
      </ul>
    </>
  )
  
}


export default withLayout(Home);


export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const firstCategory = 0;
  const { data: menu } = await axios.post<MenuItem[]>(process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/find', {
    firstCategory,
  });
  return {
    props: {
      menu,
      firstCategory
    }
  }
}

interface HomeProps extends Record<string, unknown> {
  menu: MenuItem[],
  firstCategory: number,
}