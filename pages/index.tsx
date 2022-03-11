import React, { useEffect, useState } from 'react';
import useSWR from 'swr';
import fetcher from 'api/fetcher';
import axios from 'axios';
import { NEWS } from 'api';
import { DOMAIN } from 'config';
import { Container, Header, Main, Footer, Cards } from '@components';

// const Home = (posts: string) => {
//     const [data, setData] = useState<any>('');
//     const { data: news, error } = useSWR({ url: NEWS }, fetcher);

//     useEffect(() => {
//         setData(news);
//     }, [news]);
//     return <div>{JSON.stringify(data)}</div>;
// };

const Home = (posts: any) => {
    return <div>{JSON.stringify(posts)}</div>;
};

export async function getServerSideProps() {
    // 调用外部 API 获取内容
    const { data } = await axios.get(DOMAIN + '/api/v1.0/news');
    // 在构建时将接收到 `posts` 参数
    return {
        props: {
            posts: data.data
        }
    };
}

export default Home;
