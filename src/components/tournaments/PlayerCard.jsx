function PlayerCard({ user }) {
    return (
      <div className="flex items-center my-4">
        {/* <img src={player.avatar} alt={player.username} className="w-12 h-12 rounded-full"/> */}
        <p className="ml-4 text-sm">{user.username}</p>
      </div>
    )
  }
  
  export default PlayerCard
  
  