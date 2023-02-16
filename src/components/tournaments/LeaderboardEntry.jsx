import React from 'react';

const LeaderboardEntry = ({ participant, rank }) => {
  const isRankedFirst = rank === 1;

  return (
    <div className={`py-2 px-4 ${isRankedFirst ? 'bg-yellow-200' : ''}`}>
      <div className="flex items-center justify-between">
        <div className="text-lg font-medium">{participant.user.username}</div>
        <div className="text-lg font-medium">{participant.score}</div>
      </div>
    </div>
  );
};

const Leaderboard = ({ leaderboard }) => {
  return (
    <div className="mx-auto max-w-xl">
      <h2 className="text-3xl font-bold text-center mb-6">Leaderboard</h2>
      {/* <img
          src={leaderboard[0].tournament.icon}
          alt="Tournament Icon"
          className="w-40 h-40 object-contain rounded-full"
        /> */}
      <div className="rounded-md overflow-hidden">
        {leaderboard.map((participant, index) => (
          <LeaderboardEntry participant={participant} rank={index + 1} key={participant.user.username} />
        ))}
      </div>
    </div>
  );
};

export default Leaderboard;