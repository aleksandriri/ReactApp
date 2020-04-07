import React from 'react';
import style from './Block.module.css'
import { Card } from 'antd';

const { Meta } = Card;
const Block = (props) => {
  return (
    <Card className={style.main__item} cover={<img alt="example" src={props.url} />}>
        <Meta title={props.name} name={props.name}/>
    </Card>
  );
};

export default Block;
