class AddTotalLikesToQuestion < ActiveRecord::Migration[8.0]
  def change
    add_column :questions, :total_likes, :integer, default: 0
  end
end
