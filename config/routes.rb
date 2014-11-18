Rails.application.routes.draw do
  root 'pages#home'
  get 'contact' => 'pages#contact', as: :contact
  get 'a-propos' => 'pages#about', as: :about
  get 'projets' => 'projects#index', as: :projects
  get 'projets/fabre' => 'projects#fabre', as: :fabre
  get 'projets/fabre/travaux' => 'projects#fabreBefore', as: :fabreBefore
  get 'projets/rue-de-babylone' => 'projects#rb', as: :rb
  get 'projets/rue-de-babylone/travaux' => 'projects#rbBefore', as: :rbBefore
  get 'projets/petites-ecuries' => 'projects#pe', as: :pe
  get 'projets/saint-nom-la-breteche' => 'projects#snln', as: :snlb
  get 'projets/serignan-du-comtat' => 'projects#sdc', as: :sdc

  # The priority is based upon order of creation: first created -> highest priority.
  # See how all your routes lay out with "rake routes".

  # You can have the root of your site routed with "root"
  # root 'welcome#index'

  # Example of regular route:
  #   get 'products/:id' => 'catalog#view'

  # Example of named route that can be invoked with purchase_url(id: product.id)
  #   get 'products/:id/purchase' => 'catalog#purchase', as: :purchase

  # Example resource route (maps HTTP verbs to controller actions automatically):
  #   resources :products

  # Example resource route with options:
  #   resources :products do
  #     member do
  #       get 'short'
  #       post 'toggle'
  #     end
  #
  #     collection do
  #       get 'sold'
  #     end
  #   end

  # Example resource route with sub-resources:
  #   resources :products do
  #     resources :comments, :sales
  #     resource :seller
  #   end

  # Example resource route with more complex sub-resources:
  #   resources :products do
  #     resources :comments
  #     resources :sales do
  #       get 'recent', on: :collection
  #     end
  #   end

  # Example resource route with concerns:
  #   concern :toggleable do
  #     post 'toggle'
  #   end
  #   resources :posts, concerns: :toggleable
  #   resources :photos, concerns: :toggleable

  # Example resource route within a namespace:
  #   namespace :admin do
  #     # Directs /admin/products/* to Admin::ProductsController
  #     # (app/controllers/admin/products_controller.rb)
  #     resources :products
  #   end
end
