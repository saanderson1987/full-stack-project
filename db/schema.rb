# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20170427142227) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "answers", force: :cascade do |t|
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
    t.integer  "author_id",   null: false
    t.string   "text",        null: false
    t.integer  "question_id", null: false
    t.index ["question_id"], name: "index_answers_on_question_id", using: :btree
  end

  create_table "comments", force: :cascade do |t|
    t.string   "text",       null: false
    t.integer  "answer_id",  null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer  "author_id",  null: false
    t.index ["answer_id"], name: "index_comments_on_answer_id", using: :btree
  end

  create_table "question_topic_links", force: :cascade do |t|
    t.integer  "question_id"
    t.integer  "topic_id"
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
    t.index ["question_id", "topic_id"], name: "index_question_topic_links_on_question_id_and_topic_id", unique: true, using: :btree
    t.index ["question_id"], name: "index_question_topic_links_on_question_id", using: :btree
    t.index ["topic_id"], name: "index_question_topic_links_on_topic_id", using: :btree
  end

  create_table "questions", force: :cascade do |t|
    t.string   "question",   null: false
    t.string   "details",    null: false
    t.integer  "author_id",  null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["author_id"], name: "index_questions_on_author_id", using: :btree
  end

  create_table "topics", force: :cascade do |t|
    t.string   "name",       null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["name"], name: "index_topics_on_name", unique: true, using: :btree
  end

  create_table "users", force: :cascade do |t|
    t.string   "username",        null: false
    t.string   "password_digest", null: false
    t.string   "session_token",   null: false
    t.datetime "created_at",      null: false
    t.datetime "updated_at",      null: false
    t.index ["username"], name: "index_users_on_username", unique: true, using: :btree
  end

end
