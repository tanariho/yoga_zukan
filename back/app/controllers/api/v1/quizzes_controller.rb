class Api::V1::QuizzesController < ApplicationController
  before_action :set_quiz, only: [:show]

  def index
    @quizzes = Quiz.all
    render json: @quizzes
  end

  def show
    render json: @quiz
  end

  # def create
  #  @quiz = Quiz.new(quiz_params)

  #   if @quiz.save
  #     render json: @quiz, status: :created 
  #   else 
  #     render json: @quiz.errors, status: :unprocessable_entity
  #   end
  # end

  private 

  def quiz_params
    params.require(:quiz).permit(:title, :level)
  end

  def set_quiz 
     @quiz = Quiz.find(params[:id])
  end

end
