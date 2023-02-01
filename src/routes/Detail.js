import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useLocation } from 'react-router';
import styles from "./Detail.module.css";
import { Redirect } from 'react-router-dom';

function Detail() {
  const { id } = useParams();
  const location = useLocation();

  console.log(location);
  const title = location.state.title.title;
  const detail = location.state.detail.summary;
  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
      ).json();
      
    };
    useEffect(() => {
      getMovie();
    }, []);
    const Clicked = () => <Redirect to="/" />
    
  return (
    <div className={styles.container}>
      <div className={styles.button}>
        <a className={styles.goHome} href="/">목록</a>
      </div>
      <div className={styles.movie}>
        <h1 className={styles.title}>{title}</h1>
        <p className={styles.detail}>{detail}</p>
      </div>
    </div>
  )
}
export default Detail;