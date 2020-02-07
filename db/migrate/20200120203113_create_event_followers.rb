class CreateEventFollowers < ActiveRecord::Migration[6.0]
  def change
    create_table :event_followers do |t|
      t.integer :user_id
      t.integer :event_id
      t.timestamps
    end
    add_index :event_followers, [:user_id, :event_id], unique: true
  end
end
