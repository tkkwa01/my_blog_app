Rails.application.routes.draw do
  get 'home/index'
  root 'home#index'
  namespace :api do
    namespace :v1 do
      resources :articles, only: [:index, :show]
      end
  end

  resources :articles
end