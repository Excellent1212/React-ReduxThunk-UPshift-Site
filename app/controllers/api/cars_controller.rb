class Api::CarsController < ApplicationController

  def index
    @cars = Car.all
    render :index
  end

  def show
    @car = Car.find(params[:id])
    render :show
  end

  def search
    search_price = search_params[:price] || 1000000
    search_mileage = search_params[:mileage] || 1000000
    search_body_style = search_params[:body_style] || ["convertible", "coupe", "suv"]
    search_make = search_params[:make] || ["Porsche", "Tesla", "Chevrolet"]
    search_transmission = search_params[:transmission] || ["automatic", "manual"]
    search_drivetrain = search_params[:drivetrain] || ["rwd", "awd", "4wd"]

    @cars = Car.where(body_style: search_body_style).where(make: search_make).where(transmission: search_transmission).where(drivetrain: search_drivetrain).where(<<-SQL, search_price.to_i, search_mileage.to_i)
      price <= ?
      AND mileage <= ?

    SQL
    render :index
  end

  private
  def search_params
    params.require(:search).permit(:price, :mileage, :body_style, :make, :transmission, :drivetrain)
  end
end

# -- # -- price <= #{search_params[price]}
# -- # -- AND mileage <= #{search_params[mileage]}
# -- # -- AND body_style = #{search_params[body_style]}
# -- # -- AND make = #{search_params[make]}
# -- # -- AND transmission = #{search_params[transmission]}
# -- # -- AND drivetrain = #{search_params[drivetrain]}
# -- # -- SQL