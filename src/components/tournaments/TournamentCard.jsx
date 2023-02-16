import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

function TournametCard({ tournament: { id, title, description, thumbnail, status } }) {


    const renderButton = () => {
        if(status == 'OPEN'){
            return (<Link className="btn btn-primary"
                to={`/lobby/${id}`}
            >
                <div className="bg-success w-3 h-3 rounded-full inline-block mr-2"></div>
                Join
            </Link>);
        }else{
            return (<Link className="btn btn-secondry"
                to={`/leaderboard/${id}`}
            >
                <div className="bg-success w-3 h-3 rounded-full inline-block mr-2"></div>
                Leaderboard
            </Link>);
        }
    };

    return (
        <div className="p-2">
            <div className="card card-compact w-96 bg-base-100 r-20 shadow-xl">
                <figure className="relative">
                    <img src={thumbnail} alt="Tournament" />
                    {/* <button className="btn btn-primary absolute top-0 left-0">Join</button> */}
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    <p>{description}</p>
                    <div className="card-actions justify-end">
                        {renderButton()}
                    </div>
                </div>
            </div>
        </div>
    )
}

TournametCard.propTypes = {
    tournament: PropTypes.object.isRequired,
}

export default TournametCard
