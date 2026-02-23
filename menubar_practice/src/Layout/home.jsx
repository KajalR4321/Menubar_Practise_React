import bg from "../assets/background.jpg";

const Home = () => {
    // 1. Removed the extra opening curly brace here
    return (
        <>
            <div className="relative w-full h-screen overflow-hidden">
                <img
                    src={bg}
                    alt="background image"
                    className="w-full h-full object-cover"
                />
            </div>
        </>
    );
}; // 2. Closed the function properly here

export default Home; // 3. Moved export outside the function