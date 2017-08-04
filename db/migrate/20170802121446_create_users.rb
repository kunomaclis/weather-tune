class CreateUsers < ActiveRecord::Migration
  def change
    create_table :users do |t|
      t.string :email, null: false, limit: 40
      t.string :username, null: false, limit: 40
      t.string :password_hash

      t.timestamps
    end
  end
end
