import useAxios from '../../hooks/useAxios';
const Test1 = () => {
    const url = `https://gist.githubusercontent.com/danbijyj/64e5d62fadcdb517cc66976df22053fe/raw/58d65d978c5ad2dba1cd8c8707303f98d84a75b7/boardData`;
    const { state, error, loading } = useAxios();
    return <div>{state}</div>;
};

export default Test1;
