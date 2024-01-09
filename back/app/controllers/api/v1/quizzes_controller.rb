class Api::V1::QuizzesController < ApplicationController
  before_action :set_quiz, only: [:show]

  def index
    @quizzes = Quiz.all
    render json: @quizzes
  end

  def show
    questions = @quiz.questions.includes(:answers)
    render json: questions, include: :answers
  end


  private 
  
  def set_quiz 
     @quiz = Quiz.find(params[:id])
  end

end
