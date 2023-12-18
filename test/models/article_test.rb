require 'test_helper'

class ArticleTest < ActiveSupport::TestCase
  test "should not save article without title" do
    article = Article.new
    assert_not article.save, "Saved the article without a title"
  end

  test "should report error" do
    # 何らかの条件でエラーが発生することを確認
  end

  # 他のテストケースを追加
end
