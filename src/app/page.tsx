import { montserrat } from '../utils/fonts';
import classes from './homepage.module.scss';

export default function Home() {
  return <h1 className={`${montserrat.className} ${classes.test}`}>HOME PAGE</h1>;
}
