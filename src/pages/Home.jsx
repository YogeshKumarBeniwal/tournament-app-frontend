import GamesGrid from "../components/tournaments/GamesGrid"
import TournamentsGrid from "../components/tournaments/TournamentsGrid"

function Home() {
    return (
        <div className="flex h-screen">
            <div className="w-2/3 ml-6">
                <TournamentsGrid />
            </div>
            {/* <div className="w-1/3 hidden sm:block">
                <GamesGrid />
            </div> */}
        </div>
    )
}

export default Home
