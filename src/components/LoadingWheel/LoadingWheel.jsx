import MoonLoader from "react-spinners/MoonLoader";

const LoadingWheel = ({ isLoading }) => {

    return (
        <div className='loading-wheel-container'>
            <MoonLoader
                size={100}
                color={"#4d4d4d"}
                loading={isLoading}
            />
        </div>
    )
}

export default LoadingWheel;
