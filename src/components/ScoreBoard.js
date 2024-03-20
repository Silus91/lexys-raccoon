import React from 'react'

import "./Box.css"

export const ScoreBoard = ({ scores, xPlaying }) => {
  const { xScore, oScore } = scores;

  return (
    <div className="scoreboard">
      <span className={`score x-score ${!xPlaying && "inactive"}`}>Lion- {xScore}</span>
      <span className={`score o-score ${xPlaying && "inactive"}`}>Raccoon - {oScore}</span>
    </div>
  )
}