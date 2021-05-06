@purchases.each do |purchase|
    json.set! purchase.id do 
        json.partial! '/api/purchases/purchase', purchase: purchase
        json.name purchase.product.product_name
        json.price purchase.product.price
        json.photoUrl url_for(purchase.product.photo)

    end
end