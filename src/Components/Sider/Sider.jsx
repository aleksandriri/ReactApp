import React from 'react';
import style from './Sider.module.css'
import { Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';

const Sider = () => {
  return (
    <div className={style.nav__wrapper}>
      <Avatar size={64} style={{ backgroundColor: '#87d068' }} icon={<UserOutlined />} />
      <nav className={style.nav}>
        <a href="">Фильмы</a>
        <a href="">Сериалы</a>
        <a href="">Мульфильмы</a>
        <a href="">Остальное</a>
      </nav>
    </div>
  );
}

export default Sider;
