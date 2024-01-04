class Api::V1::QuizzesController < ApplicationController
  def index
    @quiz = Quiz.all
    render json: @quiz
  end

  def show
    render json: @quiz
  end

  def create
   @quiz = Quiz.new (quiz_params)

    if @quiz.save
      render json: @quiz, status: :created 
    else 
      render json: @quiz.errors, status: :unprocessable_entity
    end
  end

  private 

  def quiz_params
    params.require(:quiz).permit(:title, :level)
  end

  def set_quiz 
     quiz = quiz.find(params[:id])
  end

end
