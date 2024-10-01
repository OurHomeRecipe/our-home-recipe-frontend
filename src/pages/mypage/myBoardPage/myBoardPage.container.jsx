import React from 'react'
import MyBoardPageUI from './myBoardPage.presenter'
import { useNavigate } from 'react-router-dom'

export default function MyBoardPage() {

  const navigate = useNavigate();

  const handleAddRecipe = () => {
    navigate('/addrecipe')
  }

  return (
    <MyBoardPageUI
    handleAddRecipe={handleAddRecipe}
    />   
  )
}
