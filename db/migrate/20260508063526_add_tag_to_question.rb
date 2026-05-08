class AddTagToQuestion < ActiveRecord::Migration[8.0]
  def change
    add_column :questions, :tag, :string, default: "Ruby"
  end
end
