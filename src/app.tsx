import './styles.css';
import IMAGE from './React.png';
import image from './logo.svg';
export const App = () => {
    return <>
        <h1>Hello React Typescript </h1>
        <img src={IMAGE} alt="REACT LOGO" width={'300'} height={'200'} />
        <img src={image} alt="REACT LOGO" width={'300'} height={'200'} />
        <h1>ENVS:{process.env.NODE_ENV}</h1>
        <h1>ENVS:{process.env.name}</h1>
    </>;
};