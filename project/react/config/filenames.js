module.exports = {
    // todo: 自定义输出目录结构
    dev: {
        js: 'static/js/[name].js',
        jsChunk: 'static/js/[name].chunk.js',
        css: '', // 在<style>中，无需配置
        img: 'static/img/[name].[hash:8].[ext]',
        media: 'static/media/[name].[hash:8].[ext]'
    },
    prod: {
        js: 'static/js/[name].[chunkhash:8].js',
        jsChunk: 'static/js/[name].[chunkhash:8].chunk.js',
        css: 'static/css/[name].[contenthash:8].css',
        img: 'static/img/[name].[hash:8].[ext]',
        media: 'static/media/[name].[hash:8].[ext]'
    }
}
