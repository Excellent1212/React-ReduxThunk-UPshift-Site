Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root "static_pages#root"

  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :show]
    resources :cars, only: [:index, :show, :create, :destroy]
    resources :test_drives, only: [:index, :create, :destroy]
    resource :session, only: [:create, :destroy]
    get '/cars-search', to: 'cars#search'
  end

end
