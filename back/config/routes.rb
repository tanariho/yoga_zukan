Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      resources :quizzes
      resources :questions
      resources :quiz_results, only: [:create]
      resources :users, only: [:index]
      resources :yoga_zukans, only: [:index]
    end
  end
  post 'auth/:provider/callback', to: 'api/v1/users#create'
end
