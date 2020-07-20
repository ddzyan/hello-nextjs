import MyLayout from '../components/MyLayout';

export default props => (
  <MyLayout>
    <h1>{props.url.query.title}</h1>
    <p>this is the blog post content.</p>
  </MyLayout>
);
