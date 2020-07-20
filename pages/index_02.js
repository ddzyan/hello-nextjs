/*
 next.js 路由遮盖，浏览器显示路由，与应用时机使用路由不同，由于简洁路由显示在页面上

 只在客户端路由中有效，如果需要服务端也支持路由遮盖，需要在服务端单独设置路由解析
 
 pages 下的文件名称，就是具体的服务器路由地址名称

*/

import MyLayout from '../components/MyLayout';
import Link from 'next/link';

const Index = props => (
  <MyLayout>
    <h1>Batman TV Shows</h1>
    <ul>
      {props.shows.map(({ show }) => (
        <li key={show.id}>
          <Link as={`/p/${show.id}`} href={`/post?id=${show.id}`}>
            <a>{show.name}</a>
          </Link>
        </li>
      ))}
    </ul>
  </MyLayout>
);

// 在getInitialProps 中使用异步获取数据，并且当做属性赋给页面，页面拿到属性的值后会用于页面的初始化渲染
Index.getInitialProps = async function () {
  const res = await fetch('https://api.tvmaze.com/search/shows?q=batman');
  const data = await res.json();

  console.log(`show data fetched. Count:${data.length}`);
  return {
    shows: data,
  };
};

export default Index;
