Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  namespace :api do
    namespace :v1 do
      resources :greetings, only: [:index]
    end
  end

  root 'root#index'
  # get greeting
  get '/greeting', to: 'api/v1/greetings#index'
end
