const HtmlWebpackPlugin = require('html-webpack-plugin')
const { isAbsoluteURL } = require('webpack-dev-server')

function createPages(template, filename, chunks) {
  return new HtmlWebpackPlugin({
    template: template,
    filename: filename,
    chunks: chunks
  })
}

const htmlPages = [
  createPages('./src/index.html', './index.html', ['index', 'react']),
  createPages('./src/pages/404.html', './404.html', ['index']),
  createPages('./src/pages/about.html', './about.html', ['index', 'react']),

   
  createPages('./src/pages/articles.html', './articles.html', ['index']),
  
  createPages('./src/pages/article-1.html', './article-1.html', ['index']),
  createPages('./src/pages/article-2.html', './article-2.html', ['index']),
  createPages('./src/pages/article-3.html', './article-3.html', ['index']),
  createPages('./src/pages/article-4.html', './article-4.html', ['index']),
  createPages('./src/pages/article-5.html', './article-5.html', ['index']),
  createPages('./src/pages/article-6.html', './article-6.html', ['index']),
  createPages('./src/pages/article-7.html', './article-7.html', ['index']),
  createPages('./src/pages/article-8.html', './article-8.html', ['index']),
  createPages('./src/pages/article-9.html', './article-9.html', ['index']),
  createPages('./src/pages/article-10.html', './article-10.html', ['index']),
  createPages('./src/pages/article-11.html', './article-11.html', ['index']),
  createPages('./src/pages/article-12.html', './article-12.html', ['index']),
  createPages('./src/pages/article-13.html', './article-13.html', ['index']),
  createPages('./src/pages/article-14.html', './article-14.html', ['index']),
 
  createPages('./src/pages/dishes.html', './dishes.html', ['index']),

  createPages('./src/pages/dish-chabey.html', './dish-chabey.html', ['index']),
  createPages('./src/pages/dish-chachi.html', './dish-chachi.html', ['index']),
  createPages('./src/pages/dish-chahai.html', './dish-chahai.html', ['index']),
  createPages('./src/pages/dish-chahe.html', './dish-chahe.html', ['index']),
  createPages('./src/pages/dish-chahu.html', './dish-chahu.html', ['index']),
  createPages('./src/pages/dish-chajin.html', './dish-chajin.html', ['index']),
  createPages('./src/pages/dish-chapan.html', './dish-chapan.html', ['index']),
  createPages('./src/pages/dish-gaiwan.html', './dish-gaiwan.html', ['index']),

  createPages('./src/pages/sorts.html', './sorts.html', ['index']),

  createPages('./src/pages/tea-black.html', './tea-black.html', ['index']),
  createPages('./src/pages/tea-green.html', './tea-green.html', ['index']),
  createPages('./src/pages/tea-oolong.html', './tea-oolong.html', ['index']),
  createPages('./src/pages/tea-red.html', './tea-red.html', ['index']),
  createPages('./src/pages/tea-white.html', './tea-white.html', ['index']),
  createPages('./src/pages/tea-yellow.html', './tea-yellow.html', ['index']),

  createPages('./src/pages/green-1.html', './green-1.html', ['index']),
  createPages('./src/pages/green-2.html', './green-2.html', ['index']),
  createPages('./src/pages/green-3.html', './green-3.html', ['index']),
  createPages('./src/pages/green-4.html', './green-4.html', ['index']),

  createPages('./src/pages/yellow-1.html', './yellow-1.html', ['index']),
  createPages('./src/pages/yellow-2.html', './yellow-2.html', ['index']),
  createPages('./src/pages/yellow-3.html', './yellow-3.html', ['index']),

  createPages('./src/pages/white-1.html', './white-1.html', ['index']),
  createPages('./src/pages/white-2.html', './white-2.html', ['index']),
  createPages('./src/pages/white-3.html', './white-3.html', ['index']),

  createPages('./src/pages/red-1.html', './red-1.html', ['index']),
  createPages('./src/pages/red-2.html', './red-2.html', ['index']),
  createPages('./src/pages/red-3.html', './red-3.html', ['index']),

  createPages('./src/pages/oolong-1.html', './oolong-1.html', ['index']),
  createPages('./src/pages/oolong-2.html', './oolong-2.html', ['index']),

  createPages('./src/pages/black-1.html', './black-1.html', ['index']),
  createPages('./src/pages/black-2.html', './black-2.html', ['index']),


  createPages('./src/pages/question-1.html', './question-1.html', ['index']),
  createPages('./src/pages/question-2.html', './question-2.html', ['index']),
  createPages('./src/pages/question-3.html', './question-3.html', ['index']),
  createPages('./src/pages/question-4.html', './question-4.html', ['index']),
  createPages('./src/pages/question-5.html', './question-5.html', ['index']),
  createPages('./src/pages/question-6.html', './question-6.html', ['index']),
  createPages('./src/pages/question-7.html', './question-7.html', ['index']),
  createPages('./src/pages/question-8.html', './question-8.html', ['index']),
  
  createPages('./src/pages/faq.html', './faq.html', ['index']),
  createPages('./src/pages/search.html', './search.html', ['index', 'search']),
  createPages('./src/pages/sitemap.html', './sitemap.html', ['index']),
]

module.exports = htmlPages