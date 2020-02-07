class CreateEvents < ActiveRecord::Migration[6.0]
  def change
    create_table :events do |t|
      t.string :title
      t.string :topic
      t.datetime :date_start
      t.datetime :date_end
      t.text :description
      t.string :location
      t.string :city
      t.string :country
      t.string :status
      t.timestamps
    end
    add_index :events, [:title, :description, :city, :date_start, :date_end], unique: true, :name => 'event_index'
  end
end
