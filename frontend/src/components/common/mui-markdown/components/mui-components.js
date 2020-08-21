import React from 'react';

import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import jsx from 'react-syntax-highlighter/dist/esm/languages/prism/jsx';
import bash from 'react-syntax-highlighter/dist/esm/languages/prism/bash';
import {
  darcula,
  solarizedlight,
} from 'react-syntax-highlighter/dist/esm/styles/prism';

import Checkbox from '@material-ui/core/Checkbox';
import Divider from '@material-ui/core/Divider';
import Paper from '@material-ui/core/Paper';
import MuiTable from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import Video from '../../video-player';

const isDark = true;

SyntaxHighlighter.registerLanguage('jsx', jsx);
SyntaxHighlighter.registerLanguage('bash', bash);

const components = {
  SyntaxHighlighter: {
    component: SyntaxHighlighter,
    props: { style: isDark ? darcula : solarizedlight },
  },
  Video: (() => {
    const Player = (props) => <Video {...props} />;
    return Player;
  })(),
  p: Typography,
  h1: (() => {
    const H1 = (props) => (
      <Typography
        {...props}
        id={props.children}
        gutterBottom
        variant={'h2'}
        component={'h2'}
      />
    );
    return H1;
  })(),
  h2: (() => {
    const H2 = (props) => (
      <Typography
        {...props}
        id={props.children}
        gutterBottom
        variant={'h4'}
        component={'h4'}
      />
    );
    return H2;
  })(),
  h3: (() => {
    const H3 = (props) => (
      <Typography
        {...props}
        id={props.children}
        gutterBottom
        variant={'h5'}
        component={'h5'}
      />
    );
    return H3;
  })(),
  h4: (() => {
    const H4 = (props) => (
      <Typography
        {...props}
        id={props.children}
        gutterBottom
        variant={'h6'}
        component={'h6'}
      />
    );
    return H4;
  })(),
  h5: (() => {
    const H5 = (props) => (
      <Typography {...props} gutterBottom variant={'h6'} component={'h6'} />
    );
    return H5;
  })(),
  h6: (() => {
    const H6 = (props) => (
      <Typography {...props} gutterBottom variant={'h6'} component={'h6'} />
    );
    return H6;
  })(),

  img: (() => {
    const Image = (props) => <img {...props} style={{ maxWidth: '100%' }} />;
    return Image;
  })(),

  a: (() => {
    const A = (props) => <Link {...props} variant='body2' color='secondary' />;
    return A;
  })(),
  blockquote: (() => {
    const Blockquote = (props) => (
      <Paper style={{ borderLeft: '4px solid grey', padding: 8 }} {...props} />
    );
    return Blockquote;
  })(),
  ul: (() => {
    const Ul = (props) => <Typography {...props} component='ul' />;
    return Ul;
  })(),
  ol: (() => {
    const Ol = (props) => <Typography {...props} component='ol' />;
    return Ol;
  })(),
  li: (() => {
    const Li = (props) => <Typography {...props} component='li' />;
    return Li;
  })(),
  table: (() => {
    const Table = (props) => <MuiTable {...props} />;
    return Table;
  })(),
  tr: (() => {
    const Tr = (props) => <TableRow {...props} />;
    return Tr;
  })(),
  td: (() => {
    const Td = ({ align, ...props }) => (
      <TableCell align={align || undefined} {...props} />
    );
    return Td;
  })(),
  tbody: (() => {
    const TBody = (props) => <TableBody {...props} />;
    return TBody;
  })(),
  th: (() => {
    const Th = ({ align, ...props }) => (
      <TableCell align={align || undefined} {...props} />
    );
    return Th;
  })(),
  thead: (() => {
    const THead = (props) => <TableHead {...props} />;
    return THead;
  })(),
  hr: (() => {
    const Hr = (props) => <Divider {...props} />;
    return Hr;
  })(),
  input: (() => {
    const Input = (props) => {
      const { type } = props;
      if (type === 'checkbox') {
        return <Checkbox {...props} disabled={true} readOnly={true} />;
      }
      return <input {...props} />;
    };
    return Input;
  })(),
  wrapper: (() => {
    const Wrapper = (props) => <div {...props} className='markdown-body' />;
    return Wrapper;
  })(),
};

export default components;
