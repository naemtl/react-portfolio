import MoonLoader from "react-spinners/MoonLoader";

import './LoadingWheel.scss'

const LoadingWheel = ({ isLoading }) => {

    return (
        <div className='loading-wheel'>
            <MoonLoader
                size={100}
                color={"#4d4d4d"}
                loading={isLoading}
            />
        </div>
    )
}

export default LoadingWheel;
