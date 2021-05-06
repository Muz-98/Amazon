# == Schema Information
#
# Table name: carts_products
#
#  id         :bigint           not null, primary key
#  cart_id    :integer          not null
#  product_id :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  quantity   :integer
#
class CartsProducts < ApplicationRecord

    validates :cart_id, :product_id, :quantity, presence: true


    belongs_to :cart,
    class_name: :Cart,
    foreign_key: :cart_id 

    belongs_to :product,
    class_name: :Product,
    foreign_key: :product_id 
end
