Rails.application.routes.draw do
  namespace :api, defaults: { format: :json } do
    namespace :v1 do
      resources :events
    end
  end

  post '/login', to: 'sessions#create'
  delete '/logout', to: 'sessions#destroy'

  post '/sign_in', to: 'user_token#create'
  post '/sign_up', to: 'users#create'
  post '/find_user' => 'users#find'


  get '*path', to: "application#fallback_index_html", constraints: ->(request) do
    !request.xhr? && request.format.html?
  end
end
