/*
 next.js 路由遮盖，浏览器显示路由，与应用时机使用路由不同，由于简洁路由显示在页面上

 只在客户端路由中有效，如果需要服务端也支持路由遮盖，需要在服务端单独设置路由解析
 
 pages 下的文件名称，就是具体的服务器路由地址名称

*/

import MyLayout from '../components/MyLayout';
import Link from 'next/link';

const PostLink = props => (
  <li>
    <Link as={`/p/${props.id}`} href={`/post?title=${props.title}`}>
      <a>{props.title}</a>
    </Link>
  </li>
);

const Index = () => (
  <MyLayout>
    <h1>My Blog</h1>
    <ul>
      <PostLink id="hello-nextjs" title="hello Nextjs" />
      <PostLink id="learn-nextjs" title="learn Next.js is awesome" />
      <PostLink id="deploy-nextjs" title="deploy apps with Zeit" />
    </ul>
    <p>Hello Next.js welcome</p>
  </MyLayout>
);

export default Index;
