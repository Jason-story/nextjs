const prefix = '/api/v1.0/';

const fetcher = (args: any) => {
    const { url, ...rest } = args;
    return fetch(prefix + url, rest).then((res) => {
        return res.json();
    });
};

export default fetcher;
