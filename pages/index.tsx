import React, { useEffect } from 'react';
import axios from 'axios';
import { GetServerSideProps } from 'next';

import { Container, Header, Main, Footer, Cards } from '@components';

const Home = ({}) => {
    useEffect(() => {
        const request = async () => {
            const data = await axios.get(
                'https://cms-test-1ggl4mj3cb10129c-1253913402.ap-shanghai.service.tcloudbase.com/api/v1.0/news',
                {
                    headers: {
                        Authorization:
                            'Bearer y_gUNmYwN7WtaCDP0MihoAC9MZJiO0JxTxlzHfrnzZMyGIhzW1GI-sQOEwHTgpVibiefkQF67ckfWRxnCZM6wA58p2G4kVNtiL5LxI1u9Jdr6Kfroq3Z61LRlu8aoi8m'
                    }
                }
            );
            console.log('data: ', data);
        };
        request();
    }, []);
    return <div>title:</div>;
};

// export async function getServerSideProps() {
//     // 调用外部 API 获取内容
//     const res = await axios.get(
//         'https://cms-test-1ggl4mj3cb10129c-1253913402.ap-shanghai.service.tcloudbase.com/api/v1.0/news'
//     );
//     console.log('res: ', res);

//     // 在构建时将接收到 `posts` 参数
//     return {
//         props: {
//             posts: res
//         }
//     };
// }

export default Home;
