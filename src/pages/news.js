import React, { useState, useEffect } from 'react';
import Layout from 'components/Layout';
import { getNews } from '../data/newsData';
import {GiNewspaper} from 'react-icons/gi'
import '../assets/stylesheets/pages/news.css'
import NewsCard from '../components/card';
import Grid from '@material-ui/core/Grid';
import moment from 'moment'


const News = () => {
    const [ articles, setArticles ] = useState([]);
    const fetchNews = () => {
        getNews().then((newArticles) => setArticles(newArticles)).catch((error) => {
            alert('there is an error!');
            console.log(error);
        });
    };
    useEffect(() => fetchNews(), []);
    console.log('news', articles);
    return (
        <Layout pageName="news" style={{ display: 'flexbox' }}>
            <h1 style={{textAlign: 'center'}}><u><GiNewspaper style={{color: 'red'}}></GiNewspaper></u>   <u>News</u></h1>
            <Grid container style={{display: 'flex', justifyContent: 'space-evenly'}}>
            {articles?.map(({ url, title, source: { name }, content, publishedAt }) => (
                <a href={url} style={{   display: 'inline', textAlign: 'center' }} key={Math.floor(Math.random()*100000000000)}>
                <NewsCard title={title} source={name} content={content} date={moment(publishedAt)._d}/>
                <br />
                </a>
            ))}
            </Grid>
        </Layout>
    );
};

export default News;
