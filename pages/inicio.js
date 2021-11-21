import bodyParser from "body-parser";
import { promisify } from "util";

import styles from "../styles/inicio.module.css";
import Menu from "../components/Menu";

import { useState } from "react";
import Head from 'next/head'

const getBody = promisify(bodyParser.urlencoded());

export default function ({ subjects, news, activities, none }) {
  const [newsOpen, setNewsOpen] = useState(false);

  const News = (props) => {
    return (
      <div className={styles.news}>
        <h3>{props.title.toLowerCase()} </h3>
        <p className={styles.news_body}>{props.body}</p>
        <span className={styles.news_date}>{props.date}</span>
      </div>
    );
  };

  const toggleNews = () => {
    setNewsOpen(!newsOpen);
  };

  const Activity = (props) => {
    return (
      <div className={styles.activity}>
        <h3>
          {props.subject.toLowerCase()}{" "}
          <span className={styles.news_date}>{props.date}</span>
        </h3>
        <p className={styles.news_body}>{props.title}</p>
      </div>
    );
  };

  console.log(news);

  return (
    <>
    <Head>
    <meta name="viewport" content="width=device-width,initial-scale=1" />
    </Head>
      <Menu />
      <div className={styles.body}>
          <div className={styles.news_div}>
            <h2>📰 Notícias</h2>
            <div
              className={`${styles.news_container} ${
                newsOpen ? styles.newsOpen : ""
              }`}
            >
              {news.map((new_i) => (
                <News title={new_i.title} date={new_i.date} body={new_i.body} />
              ))}
            </div>
            <div className={styles.toggle_news} onClick={toggleNews}>
              ᐱ
            </div>
          </div>

          <div className={`${styles.news_div} ${styles.actvis_div}`}>
            <h2>📝 Atividades</h2>
            <div className={styles.activs_container}>
              {activities.map((activ_i) => (
                <Activity
                  subject={activ_i.subject}
                  date={activ_i.date}
                  title={activ_i.title}
                />
              ))}
            </div>
          </div>
        </div>
    </>
  );
}

export async function getServerSideProps({ req, res }) {
  if (req.method === "POST") {
    await getBody(req, res);
  }

  const username = req.body?.username || "None";
  const password = req.body?.password || "None";
  if (username == "None" || password == "None") {
    return {
      props: {
        subjects: [],
        news: [],
        activities: [],
        none: true,
      },
    };
  }
  const resJson = await fetch("http://localhost:4000/api/getSigaa", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username: req.body?.username || "None",
      password: req.body?.password || "None",
    }),
  }).then((res) => res.json());

  console.log(resJson);
  return {
    props: {
      subjects: resJson.subjects,
      news: resJson.news,
      activities: resJson.activities,
      none: false,
    },
  };
}
