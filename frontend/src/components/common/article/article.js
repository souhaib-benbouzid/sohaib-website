import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Markdown from 'markdown-to-jsx';
import Video from '../video-player';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: '5px',
  },
}));

export default function Article({
  className,
  content,
  video_url,
  title,
  children,
}) {
  const classes = useStyles();
  const [article, setArticle] = React.useState({
    md: '',
  });
  React.useEffect(() => {
    fetch(content)
      .then((res) => res.text())
      .then((md) => setArticle({ md }));
  }, []);
  return (
    <article className={`${className} ${classes.root}`}>
      <Video url={video_url} />
      <Markdown children={article.md}></Markdown>
    </article>
  );
}
