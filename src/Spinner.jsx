import { Audio } from 'react-loader-spinner';
const Spinner = () => {
    return (
        <div className='hide'>
            <Audio
            height="80"
            width="80"
            radius="9"
            color="red"
            ariaLabel="three-dots-loading"
            wrapperStyle
            wrapperClass
            />
        </div>
    );
};

export default Spinner;